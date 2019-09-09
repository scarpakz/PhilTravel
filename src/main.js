import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import jQuery from 'jquery';

window.$ = window.jQuery = jQuery;

import './assets/app-style.scss';
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
//Font awesome
import 'vue-awesome/icons'
import Icons from 'vue-awesome/components/Icon'
Vue.component('icon', Icons)

import AOS from 'aos'
import 'aos/dist/aos.css'
import * as Vue2Leaflet from 'vue2-leaflet'
import { Icon }  from 'leaflet'
import 'leaflet/dist/leaflet.css'



Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.component('l-map', Vue2Leaflet.LMap)
Vue.component('l-tile-layer', Vue2Leaflet.LTileLayer)


// SMOOTH SCROLL
$(document).ready(function(){
  $(window).scroll(function(){
    let scroll_value = $(window).scrollTop();
    if(scroll_value >= 100){
      $("nav").addClass("fixed-top");
      $("nav").css("background-color","#fff");
      $("nav").css("box-shadow","2px 2px 4px #0567d4");
      $("#nav-item a").css("color","#351565");
      $(".navbar-brand").css("color","#351565");
      $(".navbar-toggler").css("background-color", "#464646");
    }else{
      $("nav").removeClass("fixed-top");
      $("nav").css("box-shadow","none");
      $("nav").css("background-color","transparent");
      $("#nav-item a").css("color","rgba(255, 255, 255, 0.5)");
      $(".dropdown-menu #navbar-items").css("color","#222");
      $("#site_title").css("color","#fff");
      $(".navbar-toggler").css("background-color", "transparent");
    }
  });

  $("#about").on('click',function(event){
    if (this.hash !== "") {
      event.preventDefault();

      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 1000, function(){
        window.location.hash = hash;
      });
    }
  });
})

// this part resolve an issue where the markers would not appear
delete Icon.Default.prototype._getIconUrl;

Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

new Vue({
  created () {
    AOS.init()
  },
})

let markerinfo = {
  title: "<b>PhilTravel and Tours</b>",
  location: "Lapasan, Cagayan de Oro",
  contact: "0909090909"
}

new Vue({
  el: '.app',
  data: { 
    map: null,
    tileLayer: null,
    layers: [],
  },
  mounted() {
    this.initMap();
    this.initLayers();
  },
  methods: {
    initMap() {
      var map = L.map('map').setView([8.4835, 124.6616], 14);
      
      this.tileLayer = L.tileLayer(
      'https://cartodb-basemaps-{s}.global.ssl.fastly.net/rastertiles/voyager/{z}/{x}/{y}.png',
        {
          maxZoom: 18,
          attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, &copy; <a href="https://carto.com/attribution">CARTO</a>',
        }
      );
      var marker = L.marker([8.4835, 124.6616]).addTo(map);
      marker.bindPopup(markerinfo.title + "<br/>" +markerinfo.location + "<br/>" + markerinfo.contact).openPopup();
      this.tileLayer.addTo(map)},
    initLayers() {},
  },
})

