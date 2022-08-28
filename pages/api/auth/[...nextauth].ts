import NextAuth from 'next-auth'
import FacebookProvider from 'next-auth/providers/facebook'
import { env } from 'process'
export default NextAuth({
  providers: [
    FacebookProvider({
      clientId: env.FACEBOOK_CLIENT_ID!,
      clientSecret: env.FACEBOOK_CLIENT_SECRET!,
    }),
  ],
})
