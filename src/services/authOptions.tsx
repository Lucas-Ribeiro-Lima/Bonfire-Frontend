import { AuthOptions } from 'next-auth'
import Keycloak from 'next-auth/providers/keycloak'
import { env } from './env'

export const authOptions: AuthOptions = {
  providers: [
    Keycloak({
      clientId: env.BONFIRE_ID,
      clientSecret: env.BONFIRE_CLIENT_SECRET,
      issuer: env.KEYCLOAK_ISSUER,
    }),
  ],
  secret: env.NEXTAUTH_SECRET,
}
