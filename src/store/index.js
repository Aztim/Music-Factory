import { createStore } from 'vuex';
import {
  // getAuth, createUserWithEmailAndPassword, db, addDoc, collection,
  getAuth, createUserWithEmailAndPassword, db, doc, setDoc,
} from '@/includes/firebase';

export default createStore({
  state: {
    authModalShow: false,
    userLoggedIn: false,
  },
  mutations: {
    toggleAuthModal: (state) => {
      state.authModalShow = !state.authModalShow;
    },
    toggleAuth(state) {
      state.userLoggedIn = !state.userLoggedn;
    },
  },
  actions: {
    async register({ commit }, payload) {
      const userCred = await createUserWithEmailAndPassword(
        getAuth(), payload.email, payload.password,
      );
      console.log(userCred.user.uid);

      await setDoc(doc(db, 'users', userCred.user.uid), {
        name: payload.name,
        email: payload.email,
        age: payload.age,
        country: payload.country,
      });

      commit('toggleAuth');
    },

    async login({ commit }, payload) {
      await getAuth.signInWithEmailAndPassord(payload.email, payload.password);

      commit('toggleAuth');
    },

    init_login({ commit }) {
      const user = getAuth.currentUser;

      if (user) {
        commit('toggleAuth');
      }
    },
  },
  getters: {
    // authModalShow: (state) => state.authModalShow,
  },
});
