export default defineEventHandler((event) => {
  // text returns an html response, Nuxt will try to automatically 
  // choose the correct content type
  // return 'Hello helloWorld'

  // returning a js object will return JSON
  // Nust will stringify it for you
  return {
    message: "hello GET request",
    // you can see what method was used for the request
    // this returns "GET"
    method: event.method,
    // you can see the content of the query params
    // when you call this api endpoint in the browser, you need to add some query 
    // params: http://localhost:3000/api/helloWorld?hello=world&color=orange
    // this return the JSON object:
    // {
    //   "message": "hello world",
    //   "method": "GET",
    //   "query": {
    //     "hello": "world",
    //     "color": "orange"
    //   }
    // }
    query: getQuery(event),
  }
})
