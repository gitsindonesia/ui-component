export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  if (body.email) {
    return {
      statusCode: 200,
      statusMessage: 'Email sent',
      email: body.email,
    };
  }

  throw createError({
    statusCode: 400,
    statusMessage: 'Email is required',
  });
});
