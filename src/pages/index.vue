<template>
  <div>
    <NavbarSection />
    <FeaturedSection />
    <CategoriesSection />
    <OfferSection />
    <TrandyProductsSection />
    <SubscribeSection />
    <ProductsSection />
    <VendorSection />
    <FooterSection />
  </div>
</template>

<script>
import NavbarSection from "../components/NavbarSection.vue";
import FeaturedSection from "../components/FeaturedSection.vue";
import CategoriesSection from "../components/CategoriesSection.vue";
import OfferSection from "../components/OfferSection.vue";
import ProductsSection from "../components/ProductsSection.vue";
import TrandyProductsSection from "../components/TrandyProductsSection.vue";
import VendorSection from "../components/VendorSection.vue";
import SubscribeSection from "../components/SubscribeSection.vue";
import FooterSection from "../components/FooterSection.vue";

export default {
  name: "Home",
  components: {
    FeaturedSection,
    NavbarSection,
    OfferSection,
    CategoriesSection,
    SubscribeSection,
    ProductsSection,
    TrandyProductsSection,
    VendorSection,
    FooterSection,
  },
};
</script>

<style></style>
