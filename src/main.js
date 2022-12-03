import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import("../public/lib/owlcarousel/assets/owl.carousel.min.css");
import("./assets/style.css");
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: function (h) {
    return h(App);
  },
}).$mount("#app");
