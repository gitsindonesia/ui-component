export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  if (!body?.username || !body?.email) {
    return {
      statusCode: 400,
      statusMessage: 'Missing required fields: username, email.',
      data: null,
    };
  }

  const {password, ...safeData} = body;

  return {
    statusCode: 200,
    statusMessage: 'Account created successfully.',
    data: safeData,
  };
});
