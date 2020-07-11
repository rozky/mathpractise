import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
// import VueGtag from "vue-gtag";

Vue.config.productionTip = false;

// https://matteo-gabriele.gitbook.io/vue-gtag/
// Vue.use(VueGtag, {
//   config: { id: "UA-48068232-3" }
// }, router);

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
