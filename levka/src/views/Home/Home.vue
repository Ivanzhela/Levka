<script>
import Product from "../../components/Product.vue";
import Hero from "./Hero/Hero.vue";
import About from "./About/About.vue";
import Statistics from "./Statistics/Statistics.vue";
import Popular from "./Popular/Popular.vue";
import Video from "./Video/Video.vue";

export default {
  components: {
    Product,
    Hero,
    About,
    Statistics,
    Popular,
    Video
},
};
</script>

<template>
    <Hero/>
    <About/>
    <Statistics/>
    <Popular/>
    <Video/>
</template>

<style lang="css" scoped>

</style>
