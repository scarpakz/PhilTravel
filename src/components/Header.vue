<template>
      <b-container>
          <b-navbar toggleable="lg" type="dark">
            <b-navbar-brand href="#" id="site_title">PhilTravel</b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
              <b-navbar-nav>
                <b-nav-item href="" id="nav-item">Home</b-nav-item>
                <b-nav-item href="#about" id="nav-item">About</b-nav-item>
                <b-nav-item-dropdown id="nav-item" href="#" text="Tourist Spot">
                  <b-dropdown-item id="navbar-items" href="#">Palawan</b-dropdown-item>
                  <b-dropdown-item id="navbar-items" href="#">Camiguin</b-dropdown-item>
                  <b-dropdown-item id="navbar-items" href="#">Siargao</b-dropdown-item>
                  <b-dropdown-item id="navbar-items" href="#">Mt. Mayon</b-dropdown-item>
                </b-nav-item-dropdown>
                <b-nav-item href="#contact" id="nav-item">Contact Us</b-nav-item>
              </b-navbar-nav>

              <!-- Right aligned nav items -->
              <b-navbar-nav class="ml-auto">
                <b-nav-form>
                  <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
                  <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
                </b-nav-form>
                
                <b-nav-item><b-button variant="warning" v-b-modal.modal-sm>Log In</b-button></b-nav-item>
                <b-nav-item><b-button variant="danger" v-b-modal.modal-lg>Register</b-button></b-nav-item>

              </b-navbar-nav>
            </b-collapse>
          </b-navbar>

          <b-modal id="modal-lg" size="lg" title="PhilTravel & Tours Registration">
            <b>Fill all required fields<span style="color:red;">*</span></b>
            <b-input type="text" placeholder="Username"></b-input>
            <b-input type="email" placeholder="Email Address"></b-input>
            <b-input type="password" placeholder="Password"></b-input>
            <b-input type="password" placeholder="Confirm Password"></b-input>
          </b-modal>

          <b-modal id="modal-sm" size="sm" title="PhilTravel - Log In">
            <b-input type="email" placeholder="Email Address"></b-input>
            <b-input type="password" placeholder="Password"></b-input>
          </b-modal>

        <b-jumbotron style="background:#23222270;" 
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="true"
        data-aos-anchor-placement="top-center">

          <template slot="header"><span class="site-header-title">Philippines - <u class="detail-header">Travel and Tours</u></span></template>

          <template slot="lead">
            <q class="quote">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora perspiciatis, esse nisi ipsa deleniti rerum modi quasi! Iure repudiandae dolor ut natus maiores? Consequatur ipsa nobis quisquam tenetur commodi! Temporibus!
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora perspiciatis, esse nisi ipsa deleniti rerum modi quasi! Iure repudiandae dolor ut natus maiores? Consequatur ipsa nobis quisquam tenetur commodi! Temporibus!
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora perspiciatis, esse nisi ipsa deleniti rerum modi quasi! Iure repudiandae dolor ut natus maiores? Consequatur ipsa nobis quisquam tenetur commodi! Temporibus!
            </q>
          </template>

          <hr class="my-4">

          <p class="p-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora perspiciatis, esse nisi ipsa deleniti rerum modi quasi! Iure repudiandae dolor ut natus maiores? Consequatur ipsa nobis quisquam tenetur commodi! Temporibus!
          </p>

          <b-button variant="primary" href="#about">Get Started</b-button>
        </b-jumbotron>
      </b-container>
    
</template>

<script>
export default {
 
};
</script>

<style scoped>

</style>