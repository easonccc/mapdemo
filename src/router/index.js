import Vue from "vue";
import VueRouter from "vue-router";
import Mymap from '@/components/map.vue'

Vue.use(VueRouter);

const routes = [{
  path: "/",
  name: 'mymap',
  component: Mymap
}];

const router = new VueRouter({
  routes
});

export default router;