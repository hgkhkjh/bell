import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import { request } from './components/network/request'
import { Lazyload } from 'vant';

import Vant from 'vant';
import 'vant/lib/index.css';

const app = createApp(App)
app.config.globalProperties.$axios = axios

createApp(App).use(router).use(Vant).use(Lazyload).mount('#app')
request({
    url:"/home/multidata",
}).then(res=>{
    console.log(res);
}).catch(err=>{
    console.log(err);
})
