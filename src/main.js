import { createApp } from 'vue'
import App from './App.vue'
import inspect from 'object-inspect';

createApp(App).mount('#app')

var obj = { a: 1};
console.log(inspect(obj));
