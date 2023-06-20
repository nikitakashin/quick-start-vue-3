import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { router } from '~/router/index';
import './assets/global.css';
import App from '~/App.vue';
import { registerLayouts } from '~/layouts/register';

const app = createApp(App);
const pinia = createPinia();

registerLayouts(app);

app.use(router);
app.use(pinia);

app.mount('#app');
