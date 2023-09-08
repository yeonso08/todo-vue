import Vue from "vue";
import VueRouter from "vue-router";

// 플러그인을 실행하기 위해서 필요한 코드
Vue.use(VueRouter);

// VueRouter로 인스턴스를 생성하고 export default 로 꺼냄.
export default new VueRouter({
  // routes: Vue Router에 의해서 컨트롤되는 페이지의 정보를 담는 것
  routes: [],
});
