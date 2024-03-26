import { env } from '@/services/env'
import NextAuth from 'next-auth'
import Keycloak from 'next-auth/providers/keycloak'

const handler = NextAuth({
  providers: [
    Keycloak({
      clientId: env.BONFIRE_ID,
      clientSecret: env.BONFIRE_CLIENT_SECRET,
      issuer: env.KEYCLOAK_ISSUER,
    }),
  ],
})

export { handler as GET, handler as POST }
