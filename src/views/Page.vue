<template>
  <div>
    <!-- HEADER COMPONENT -->
    <div class="header-background">
      <div class="header-color">
        <Header />
      </div>
    </div>
    <!-- ABOUT COMPONENT -->
    <div class="about-content"
      data-aos="fade-up"
      data-aos-offset="200"
      data-aos-delay="50"
      data-aos-duration="500"
      data-aos-easing="ease-in-out"
      data-aos-mirror="true"
      data-aos-once="true"
      data-aos-anchor-placement="top-center">
        <About id="about"/>
    </div>
    <!-- CAROUSEL COMPONENT -->
    <div class="carousel-custom-component">
      <Carousel />
    </div>
    <!-- CONTACT COMPONENT -->
    <div class="contact-content">
      <Contact />
    </div>
    <!-- FOOTER COMPONENT -->
    <div class="footer-content">
      <Footer />
    </div>
    <!-- SOCIAL MEDIA -->
    <div class="media-content">
      <Media />
    </div>
  </div>
</template>

<script>
import Header from '../components/Header';
import About from '../components/About';
import Carousel from '../components/Carousel';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Media from '../components/Media';

export default {
  components: {
    Header,
    About,
    Carousel,
    Contact,
    Footer,
    Media
  },
};


</script>
