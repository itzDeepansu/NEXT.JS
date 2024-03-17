import NextAuth from "next-auth/next";
import prisma from "../../../libs/prismadb";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";
import bcrypt from 'bcrypt'

export const authOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "text", placeholder: "deepansu" },
        username: { label: "Username", type: "text", placeholder: "username" },
        password: {
          label: "password",
          type: "password",
        },
      },
      async authorize(credentials) {

        if(!credentials.email || !credentials.password){
          return new Error ("Empty fields")
        }

        const user = await prisma.user.findUnique({
          where:{
            email:credentials.email
          },
        })

        if(!user || !user?.hashedPassword){
          return new Error ("No such user found")
        }

        const isMatched  = await bcrypt.compare(credentials.password,user.hashedPassword)
        console.log("hi");
        if(!isMatched){
          return new Error ("Invalid credentials")
        }
        console.log("matched");
        return user

      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
  },
  debug: process.env.NODE_ENV === "development",
};
const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
