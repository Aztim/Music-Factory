import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import VeeValidatePlugin from './includes/validation';
import { getAuth, onAuthStateChanged } from './includes/firebase';
import './assets/tailwind.css';
import './assets/main.css';

let app;

onAuthStateChanged(getAuth(), () => {
  if (!app) {
    app = createApp(App);

    app.use(store);
    app.use(router);
    app.use(VeeValidatePlugin);

    app.mount('#app');
  }
});
