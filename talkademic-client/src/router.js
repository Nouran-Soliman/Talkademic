import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Followers from './views/Followers.vue'
import Following from './views/Following.vue'
import ForgotPassword from './views/ForgotPassword.vue'
import Newsfeed from './views/Newsfeed.vue'
import Notifications from './views/Notifications.vue'
import PaperDiscussion from './views/PaperDiscussion.vue'
import Profile from './views/Profile.vue'
import ResetPassword from './views/ResetPassword.vue'
import SearchResults from './views/SearchResults.vue'
import Settings from './views/Settings.vue'
import Signup from './views/Signup.vue'
import StartNewDiscussion from './views/StartNewDiscussion.vue'
import VerifyAccount from './views/VerifyAccount.vue'
import VerifyAuthorIdentity from './views/VerifyAuthorIdentity.vue'
import Explore from './views/Explore.vue'

// import store from './store/store'

Vue.use(Router)

let router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/followers/:username',
      name: 'Followers',
      component: Followers,
      props: true
    },
    {
      path: '/following/:username',
      name: 'Following',
      component: Following,
      props: true
    },
    {
      path: '/forgotpassword',
      name: 'ForgotPassword',
      component: ForgotPassword
    },
    {
      path: '/newsfeed/:username',
      name: 'Newsfeed',
      component: Newsfeed,
      props: true,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/notifications/:username',
      name: 'Notifications',
      component: Notifications,
      props: true,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/paperdiscussion/:paperId',
      name: 'PaperDiscussion',
      component: PaperDiscussion,
      props: true
    },
    {
      path: '/profile/:username',
      name: 'Profile',
      component: Profile,
      props: true
    },
    {
      path: '/explore/:username',
      name: 'Explore',
      component: Explore,
      props: true
    },
    {
      path: '/resetpassword/:token',
      name: 'ResetPassword',
      component: ResetPassword,
      props: true
    },
    {
      path: '/searchresults/:keywords',
      name: 'SearchResults',
      component: SearchResults,
      props: true
    },
    {
      path: '/settings',
      name: 'Settings',
      component: Settings,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/signup',
      name: 'Signup',
      component: Signup
    },
    {
      path: '/startnewdiscussion',
      name: 'StartNewDiscussion',
      component: StartNewDiscussion,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/verifyaccount/:token',
      name: 'VerifyAccount',
      component: VerifyAccount,
      props: true
    },
    {
      path: '/verifyauthoridentity/:token',
      name: 'VerifyAuthorIdentity',
      component: VerifyAuthorIdentity,
      props: true
    },
    {
      path: '*',
      component: Home
    }
  ]
})

// router.beforeEach((to, from, next) => {
//   if(to.matched.some(record => record.meta.requiresAuth)) {
//     if (store.getters['auth/isLoggedIn']) {
//       next();
//       window.scrollTo(0, 0);
//       return;
//     }
//     else
//       next('/home');
//   } else {
//     next();
//   }
// })

export default router;
