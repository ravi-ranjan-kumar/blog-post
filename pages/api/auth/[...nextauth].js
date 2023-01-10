import { compare } from "bcrypt";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import dbConnect from "../../../lib/dbConnect";
import User from "../../../models/User";

const authOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      type: "credentials",
      credentials: {},
      async authorize(credentials, req) {
        try {
          dbConnect();
        } catch (err) {
          console.log(err);
        }

        const { email, password } = credentials;
        let user = await User.findOne({ email });
        if (!user) {
          throw new Error('Unknown User')
        }
        const checkPassword = await compare(password, user.password);
        if (!checkPassword) {
          throw new Error("Invalid credentials")
        }
        return {
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email,
        };
      },
    }),
  ],
  pages: {
    signIn: "/auth/login",
    
  },
};
export default NextAuth(authOptions);
