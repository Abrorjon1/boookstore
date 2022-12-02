<template>
  <div>
    <NavbarSection />
    <FeaturedSection />
    <CategoriesSection />
    <OfferSection />
    <ProductsSection />
    <SubscribeSection />
  </div>
</template>

<script>
import NavbarSection from "../components/NavbarSection.vue";
import FeaturedSection from "../components/FeaturedSection.vue";
import CategoriesSection from "../components/CategoriesSection.vue";
import OfferSection from "../components/OfferSection.vue";
import ProductsSection from "../components/ProductsSection.vue";
import SubscribeSection from "../components/SubscribeSection.vue";

export default {
  name: "Home",
  components: {
    FeaturedSection,
    NavbarSection,
    OfferSection,
    CategoriesSection,
    SubscribeSection,
    ProductsSection,
  },
};
</script>

<style></style>
