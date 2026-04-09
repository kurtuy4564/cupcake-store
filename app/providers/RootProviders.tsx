import React from 'react'
import { SessionProvider } from 'next-auth/react'
import { auth } from '@/shared/lib/auth/auth'

export const RootProviders = async ({ children }: { children: React.ReactNode }) => {
  const session = await auth()

  return (
    <SessionProvider session={session}>
      <div>{children}</div>
    </SessionProvider>
  )
}
