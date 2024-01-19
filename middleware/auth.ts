export default defineNuxtRouteMiddleware((to, from) => {
  // we are just mocking this variable to true since we don't have any users 
  // or actual auth setup.
  const userIsLoggedIn = false;
  if (!userIsLoggedIn) {
   // built-in function that prevents navigation to any page if the  user is not
   // logged in
    // return abortNavigation("You are not allowed access because you are not logged in");

    // Better, however, to navigate the user to the login page instead
    // return navigateTo('/login');
    // or using name
    // return navigateTo({ name: 'login' })
    // or using path
    return navigateTo({ path: 'login' })
  }
})
