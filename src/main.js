import { createApp } from 'vue';
import router from './router';

import Main from './Main.vue';

createApp(Main)
  .use(router)
  .mount('[app]');
