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
  secret: process.env.NEXTAUTH_SECRET ?? process.env.BETTER_AUTH_SECRET,
  providers: [
    Credentials({
      credentials: {
        email: {},
        password: {},
      },
      authorize: async credentials => {
        try {
          console.log('[authorize] Received credentials:', { email: credentials?.email })
          
          if (!credentials?.email || !credentials.password) {
            console.log('[authorize] Missing email or password')
            throw new Error('Email and password are required.')
          }

          console.log('[authorize] Parsing credentials with schema...')
          const { email, password } = await signInSchema.parseAsync(credentials)
          console.log('[authorize] Parsed email:', email)

          const user = await getUserFromDb(email)
          console.log('[authorize] User found:', user ? { id: user.id, email: user.email } : 'null')

          if (!user || !user.password) {
            console.log('[authorize] User not found or has no password')
            throw new Error('Invalid credentials.')
          }

          const isPasswordValid = await bcryptjs.compare(password, user.password)
          console.log('[authorize] Password valid:', isPasswordValid)

          if (!isPasswordValid) {
            console.log('[authorize] Password mismatch')
            throw new Error('Invalid credentials.')
          }

          console.log('[authorize] Success!')
          return { id: user.id, email: user.email }
        } catch (error) {
          console.log('[authorize] Error caught:', error)
          if (error instanceof ZodError) {
            console.log('[authorize] Zod validation error')
            return null
          }
          return null
        }
      },
    }),
  ],
})
