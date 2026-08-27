import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

import '@fortawesome/fontawesome-free/css/all.css'
import '@/assets/css/tailwind.css'

createApp(App).use(router).mount('#app');

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
