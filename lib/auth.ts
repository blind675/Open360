import { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { createUser } from "./actions";

export const authConfig: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    }),
  ],
  callbacks: {
    async signIn({ user, account }) {
      if (account?.provider === "google" && user?.email && user?.name) {
        await createUser(user.email, user.name, user.image || undefined);
        console.log(" new user sign in:", user);
      }
      return true;
    },
  },
};
