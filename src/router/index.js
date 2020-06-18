import Vue from "vue";
import VueRouter from "vue-router";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import NotFound from "../views/404";
// import RenderRouterView from "../components/RenderRouterView.vue";

Vue.use(VueRouter);

const routes = [
  // user - 登录、注册
  {
    path: "/user",
    //可以接收子路由中组件的挂载
    // component: RenderRouterView,
    // component: { render: h => h("router-view") }, //原理：JSX与template都会被转义成render函数
    component: () =>
      import(/* webpackChunkName: "user" */ "../layouts/UserLayout.vue"),
    children: [
      {
        // 当访问路径为"/user"时，自动跳转到"/user/login"
        path: "/user",
        redirect: "/user/login"
      },
      {
        path: "/user/login",
        name: "login",
        component: () =>
          import(/* webpackChunkName: "user" */ "../views/User/Login.vue")
      },
      {
        path: "/user/register",
        name: "register",
        component: () =>
          import(/* webpackChunkName: "user" */ "../views/User/Register.vue")
      }
    ]
  },
  // dashboard - 仪表盘
  {
    path: "/",
    component: () =>
      import(/* webpackChunkName: "dashboard" */ "../layouts/BasicLayout"),
    children: [
      {
        path: "/",
        redirect: "/dashboard/analysis"
      },
      {
        path: "/dashboard",
        redirect: "/dashboard/analysis"
      },
      {
        path: "dashboard/analysis",
        name: "dashboard",
        component: () =>
          import(
            /* webpackChunkName: "dashboard" */ "../views/Dashboard/Analysis"
          )
      }
    ]
  },
  // form - 表单
  {
    path: "/form",
    name: "form",
    redirect: "/form/basic-form",
    component: { render: h => h("router-view") },
    children: [
      {
        path: "/form/basic-form",
        name: "basicform",
        component: () =>
          import(/* webpackChunkName: "form" */ "../views/Forms/BasicForm")
      },
      {
        path: "/form/step-form",
        name: "stepform",
        component: () =>
          import(
            /* webpackChunkName: "form" */ "../views/Forms/StepForm/index"
          ),
        children: [
          {
            path: "/form/step-form/",
            redirect: "/form/step-form/info"
          },
          {
            path: "/form/step-form/info",
            name: "info",
            component: () =>
              import(
                /* webpackChunkName: "form" */ "../views/Forms/StepForm/Step1"
              )
          },
          {
            path: "/form/step-form/confirm",
            name: "confirm",
            component: () =>
              import(
                /* webpackChunkName: "form" */ "../views/Forms/StepForm/Step2"
              )
          },
          {
            path: "/form/step-form/result",
            name: "result",
            component: () =>
              import(
                /* webpackChunkName: "form" */ "../views/Forms/StepForm/Step3"
              )
          }
        ]
      }
    ]
  },
  {
    path: "*",
    name: "404",
    component: NotFound
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

// 不直接返回是为了获取这两个钩子？
router.beforeEach((to, from, next) => {
  NProgress.start();
  next();
});

router.afterEach(() => {
  NProgress.done();
});

export default router;
