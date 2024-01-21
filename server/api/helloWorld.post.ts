export default defineEventHandler(async (event) => {
  // get the body that comes from the POST reqeust with readBody(), it returns a 
  // Promise, so make this defineEventHandler async and await readBody()
  const body = await readBody(event);
  return {
    message: body,
  }
})

