import { createApp } from 'vue'
import App from './App.vue'
import router from "./router";

// глобальная регистрация компонентов,
// маршрутизатора, vuex-хранилища,
// подключение глобальных стилей
createApp(App).use(router).mount('#app')



// vue add router