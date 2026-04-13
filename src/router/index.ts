import { createWebHistory, createRouter } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import ExerciseView from "@/views/ExerciseView.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
  },
  {
    path: "/exercise",
    name: "Exercise",
    component: ExerciseView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
