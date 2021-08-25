import { createRouter, createWebHashHistory } from 'vue-router'
// import Home from '../views/Home.vue'
// import About from '../views/About.vue'
// import Another from '../views/Another.vue'
const home = () => import('../views/home/home.vue')
const mine = () => import('../views/mine/mine.vue')
const shopcart = () => import('../views/shopcart/shopcart.vue')
const enroll = () => import('../views/shopcart/shopcartchid/enroll.vue')
const login =()=> import('../views/shopcart/shopcartchid/login.vue')
const sell =()=> import("../views/shopcart/shopcartchid/sell.vue")
const sele =()=>import("../views/shopcart/shopcartchid/sele.vue")
const routes = [
  {
    path: '',
    redirect: '/home',
  },
  {
    //通过寻找组件定义参数名称
    path: '/home',
    //定义的组件名称
    component: home,
    meta: {
      title: '消息'
    },
    // beforeEnter:(to,from,next)=>{
    //   alert("欢迎来到小仙女的界面")
    //   next()
    // }
  },

  {
    path: '/mine',
    name: 'mine',
    component: mine,
    meta: {
      title: '我的'
    },
  },
  {
    path: '/shopcart',
    name: 'shopcart',
    component: shopcart,
    meta: {
      title: '市场'
    },
  },
{
  path: '/enroll',
  name: 'enroll',
  component: enroll,
  meta: {
    title: '注册'
  },
},
{
  path: '/login',
  name: 'login',
  component: login,
  meta: {
    title: '登录'
  },
},
{
  path: '/sell',
  name: 'sell',
  component: sell,
  meta: {
    title: '登录'
  },

},
{
  path: '/sele',
  name: 'sele',
  component: sele,
  meta: {
    title: '选择'
  },
},

]
const router = createRouter({
  history: createWebHashHistory(),
  routes,
  mode: "history",
  linkActiveClass: 'active'

})
router.beforeEach((to, from, next) => {
  //从from转到to
  document.title = to.meta.title
  next()
})
export default router
