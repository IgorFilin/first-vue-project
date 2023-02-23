import { createApp } from "vue";
import { createStore } from "vuex";
import App from "./App.vue";

const b = [1, 2, 3, 4, 5];
const a = 0;
const c = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export const store = createStore({
  state() {
    return {
      count: 0,
    };
  },
  mutations: {
    increment(state) {
      state.count++;
    },
  },
});

const app = createApp(App);

// Install the store instance as a plugin
app.use(store);
