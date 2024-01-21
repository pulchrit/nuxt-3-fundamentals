
<script setup>
  // use Nuxt's built-in useState composable for global state
  // first arg is key
  // second arg is default value and it should be returned in a callback function
  // const isLoggedIn = useState('isLoggedIn', () => false);
  // or using our custom composable useIsLoggedIn which returns the value from useState
  // const isLoggedIn = useIsLoggedIn();

  // example using Pinia instead of custom composable
  // returns state, getters, and actions
  const user = useUser();

  // this page will use the plain layout rather than default layout
  definePageMeta({
    layout: "plain",
  })

  // define login function to update global state
  // function login() {
  //   // update value in global state
  //   user.isLoggedIn = true;
  //   // use built-in composable useRouter to navigate user to home page
  //   useRouter().push('/');
  // }
</script>
<template>
  <!-- call login from user object when using Pinia for state mgmt -->
    <form @submit.prevent="user.login">
  <!-- call login function on submission of form; prevent default with .prevent -->
  <!-- <form @submit.prevent="login"> -->
    <h1>Login</h1>
    <label for="#username">Username:</label>
    <input id="username" type="text" />
    <label for="#password">Password:</label>
    <input id="password" type="password" />
    <button>Login</button>
  </form>
</template>