import HomeRedirect from "@/app/router-provider/home-redirect/HomeRedirect.vue";
import HomePage from "@/pages/home-page/ui/HomePage.vue";
import NotFoundPage from "@/pages/not-found-page/ui/NotFoundPage.vue";
import ProfilePage from "@/pages/profile-page/ui/ProfilePage.vue";
import SignInPage from "@/pages/sign-in-page/ui/SignInPage.vue";
import SignUpPage from "@/pages/sign-up-page/ui/SignUpPage.vue";

import { createWebHistory } from "vue-router";
import { createRouter } from "vue-router";

const routes = [
  {
    path: "/",
    component: HomePage,
  },
  {
    path: "/signin",
    component: HomeRedirect,
    children: [
      {
        path: "",
        component: SignInPage,
      },
    ],
  },
  {
    path: "/signup",
    component: HomeRedirect,
    children: [
      {
        path: '',
        component: SignUpPage
      }
    ]
  },
  {
    path: '/profile/:id',
    component: ProfilePage
  },
  {
    path: "/:pathMatch(.*)*",
    component: NotFoundPage,
  },
];

export const router = createRouter({
  history: createWebHistory('/YolDi/'),
  routes,
});
