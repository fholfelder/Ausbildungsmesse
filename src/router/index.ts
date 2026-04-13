import { createWebHistory, createRouter } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import EmojiExerciseView from "@/views/EmojiExerciseView.vue";

const exerciseRoutes = [
  {
    path: "/emoji-exercise",
    name: "Exercise",
    component: EmojiExerciseView,
  },
]

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
  },
  ...exerciseRoutes
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, _, next) => {
  if (to.path === '/exercise') {
    next(exerciseRoutes[Math.floor(Math.random() * exerciseRoutes.length)]?.path)
  } else {
    next()
  }
});

export default router;
