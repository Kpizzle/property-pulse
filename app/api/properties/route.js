import connectDB from 'config/database';
import Property from 'models/Property';

//GET /api/properties
export const GET = async (params) => {
  try {
    await connectDB();

    const properties = await Property.find({});
    return Response.json(properties);
  } catch (error) {
    return new Response(error.message, { status: 500 });
  }
};
