import { withAuth } from 'next-auth/middleware'
import { env } from '@/services/env'

export default withAuth({
  secret: env.NEXTAUTH_SECRET,
  pages: {
    signIn: '/login',
    signOut: '/login',
  },
  callbacks: {
    async authorized({ token }) {
      if (!token) return false

      const response = await fetch(
        `${env.KEYCLOAK_ISSUER}/protocol/openid-connect/userinfo`,
        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            Authorization: `Bearer ${token['accessToken']}`,
          },
        },
      )

      return response.ok
    },
  },
})

export const config = {
  matcher: [
    '/infractions/:path*',
    '/registers/:path*',
    '/import/:path*',
    '/recurses/:path*',
  ],
}
