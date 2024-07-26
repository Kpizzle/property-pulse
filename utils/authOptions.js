import GoogleProvider from 'next-auth/providers/google';
import connectDb from 'config/database';
import User from 'models/User';

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      authorization: {
        params: {
          prompt: 'consent',
          access_type: 'offline',
          response_type: 'code',
        },
      },
    }),
  ],
  callbacks: {
    //invoked on success
    async signIn({ profile }) {
      //Connect DB
      await connectDb();
      //Check if user exists
      const userExists = await User.findOne({ email: profile.email });
      console.log('User: ', userExists);
      //if not, add user to db
      if (!userExists) {
        //trunc username if too long
        const username = profile.name.slice(0, 20);
        console.log('usklfkjsdf', username);
        await User.create({ email: profile.email, username: username, image: profile.picture });
      }
      //return true to allow login
      return true;
    },
    //modify session object
    async session({ session }) {
      const user = await User.findOne({ email: session.user.email });
      console.log('found existing: ', user);
      session.user.id = user._id.toString();
      return session;
    },
  },
};
