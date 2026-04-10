import React from 'react'
import { SessionProvider } from 'next-auth/react'
import { auth } from '@/shared/lib/auth/auth'
import { AppLoader } from './hoc/app-loader'

export const RootProviders = async ({ children }: { children: React.ReactNode }) => {
  const session = await auth()

  return (
    <SessionProvider session={session}>
      <AppLoader>
        <div>{children}</div>
      </AppLoader>
    </SessionProvider>
  )
}
