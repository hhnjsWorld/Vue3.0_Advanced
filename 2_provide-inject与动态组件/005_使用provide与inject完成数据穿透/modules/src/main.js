import { createApp } from "vue";
import App from "./App.vue";
/* 注册为全局组建件 */
import Card from "./components/Card.vue";
import XInput from "./components/XInput.vue";

const app = createApp(App);
/* 已注册为全局组件 */
/* 注册为全局组建 更方便 全局内复用  */
app.component("card", Card);
app.component("x-input", XInput);
/* 把报错关掉 */
app.config.unwrapInjectedRef = true;
app.mount("#app");