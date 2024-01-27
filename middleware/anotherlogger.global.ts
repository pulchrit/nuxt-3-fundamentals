// because we have global in tthe filename, this middleware will be applied to 
// all routes!
export default defineNuxtRouteMiddleware((to, from) => {
  // console.log(to, from, 'from the named middelware');
})
