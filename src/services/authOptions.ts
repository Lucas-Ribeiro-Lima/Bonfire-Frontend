import {
  GetServerSidePropsContext,
  NextApiRequest,
  NextApiResponse,
} from 'next'
import { getServerSession, type NextAuthOptions } from 'next-auth'
import Keycloak from 'next-auth/providers/keycloak'
import { env } from './env'

export const authOptions: NextAuthOptions = {
  providers: [
    Keycloak({
      clientId: env.BONFIRE_ID,
      clientSecret: env.BONFIRE_CLIENT_SECRET,
      issuer: env.KEYCLOAK_ISSUER,
    }),
  ],
  secret: env.NEXTAUTH_SECRET,
  pages: {
    signIn: '/login',
    signOut: '/login',
  },
} satisfies NextAuthOptions

// Server Contexts
export function auth(
  ...args:
    | [GetServerSidePropsContext['req'], GetServerSidePropsContext['res']]
    | [NextApiRequest, NextApiResponse]
    | []
) {
  return getServerSession(...args, authOptions)
}
