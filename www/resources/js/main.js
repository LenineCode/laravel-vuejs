import Vue from 'vue';
import App from './App';
import router from './router';

const main = new Vue({
    router,
    render: (h) => h(App),
}).$mount('#app');
