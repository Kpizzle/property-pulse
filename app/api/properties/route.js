import connectDb from 'config/database';

export const GET = async (params) => {
  try {
    await connectDb();
    return new Response(
      JSON.stringify({
        message: 'GET request to the homepage',
      }),
      { status: 200 }
    );
  } catch (error) {
    return new Response(error.message, { status: 500 });
  }
};
