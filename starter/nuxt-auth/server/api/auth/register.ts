export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  return {
    statusCode: 200,
    statusMessage: 'Account created successfully.',
    data: body,
  };
});
