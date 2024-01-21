export const useUser = defineStore("user", {
  state: () => {
    return {
      isLoggedIn: false,
    };
  },
  getters: {},// equivalent to computed state
  actions: {
      login() {
      // update value in global state using this!
      this.isLoggedIn = true;
      // use built-in composable useRouter to navigate user to home page
      useRouter().push('/');
  }
  },
});

// Pinia docs provide this snippet to make Hot Modele Replacement work for the store.
if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useUser, import.meta.hot))
}