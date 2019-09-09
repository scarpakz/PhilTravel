<template>
    <div class="contact-info" id="contact">
        <b-container>
            <h1 class="contact-title">Contact Us</h1>
            <b-row>
                <b-col>
                    <h2>NEWSLETTER</h2>
                    <p><i>Subscribe to get the latest updates</i></p>
                    <b-form-input v-model="email" placeholder="Email Address" required></b-form-input>
                    <b-form-input v-model="text" placeholder="First name" required></b-form-input>
                    <b-form-input v-model="text" placeholder="Last name" required></b-form-input>
                    <b-form-input v-model="text" placeholder="Contact Number ( Optional )"></b-form-input>
                    <b-button variant="info">SUBSCRIBE</b-button>
                </b-col>
                <b-col><div id="map"></div></b-col>
            </b-row>
        </b-container>
    </div>
</template>
<script>
export default {

}
</script>
<style scoped>
#map{
    height: 500px;
}
</style>