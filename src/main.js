import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

/** 组件引入方式 */
// 1. 全部引入
// import Antd from "ant-design-vue"; //组件全部引入
// import "ant-design-vue/dist/antd.less"; // 样式全部引入
// Vue.use(Antd); //组件注册

// 2. 部分引入
// import Button from "ant-design-vue/lib/button"; //组件部分引入
// import "ant-design-vue/lib/button/style"; // 样式部分引入
// Vue.use(Button) //组件注册

// 通过babel管理实现按需引入：默认替换为上方代码(需要在package.json中配置babel插件管理的依赖，或者直接下载)
import { Button } from "ant-design-vue";

Vue.config.productionTip = false;

// 注册为全局组件
Vue.use(Button);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
