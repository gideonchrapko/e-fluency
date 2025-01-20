import { PrismaAdapter } from '@auth/prisma-adapter';
import { type DefaultSession, type NextAuthConfig } from 'next-auth';
import Google from 'next-auth/providers/google';
import { db } from '@/server/db';

declare module 'next-auth' {
  interface Session extends DefaultSession {
    user: {
      id: string;
    } & DefaultSession['user'];
  }
}

export const authConfig = {
  providers: [Google],
  adapter: PrismaAdapter(db),
  callbacks: {
    session: ({ session, user }) => ({
      ...session,
      user: {
        ...session.user,
        id: user.id,
      },
    }),
    // authorized: async ({ auth }) => {
    //   // Return true if there's an auth session, false otherwise
    //   return !!auth;
    // },
  },
} satisfies NextAuthConfig;

import NextAuth from 'next-auth';
export const { handlers, auth, signIn, signOut } = NextAuth(authConfig);
