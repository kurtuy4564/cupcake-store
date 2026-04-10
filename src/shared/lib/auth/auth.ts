import NextAuth from 'next-auth'
import { ZodError } from 'zod'
import Credentials from 'next-auth/providers/credentials'
import { signInSchema } from './zod'
import { getUserFromDb } from './user'
import { PrismaAdapter } from '@auth/prisma-adapter'
import { prisma } from '../prisma'
import bcryptjs from 'bcryptjs'

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    Credentials({
      credentials: {
        email: {},
        password: {},
      },
      authorize: async credentials => {
        try {
          if (!credentials?.email || !credentials.password) {
            throw new Error('Email and password are required.')
          }

          const { email, password } = await signInSchema.parseAsync(credentials)

          const user = await getUserFromDb(email)

          if (!user || !user.password) {
            throw new Error('Invalid credentials.')
          }

          const isPasswordValid = await bcryptjs.compare(password, user.password)

          if (!isPasswordValid) {
            throw new Error('Invalid credentials.')
          }

          return { id: user.id, email: user.email }
        } catch (error) {
          if (error instanceof ZodError) {
            return null
          }
          return null
        }
      },
    }),
  ],
  session: {
    strategy: 'jwt',
    maxAge: 3600,
  },
  secret: process.env.NEXTAUTH_SECRET,
  trustHost: true,
  callbacks: {
    async jwt({ token, user }) {
      try {
        if (user) {
          token.id = user.id as string
          token.email = user.email
        }
        return token
      } catch (error) {
        console.error('JWT callback error:', error)
        return token
      }
    },
    async session({ session, token }) {
      try {
        if (session?.user) {
          session.user.id = token.id
        }
        return session
      } catch (error) {
        console.error('Session callback error:', error)
        return session
      }
    },
  },
  pages: {
    error: '/login',
  },
})
