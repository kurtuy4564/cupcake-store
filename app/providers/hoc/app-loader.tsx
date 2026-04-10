'use client'

import { useAuthStore } from '@/entities/user/store'
import { useSession } from 'next-auth/react'
import { useEffect } from 'react'

export const AppLoader = ({ children }: { children: React.ReactNode }) => {
  const { data: session, status } = useSession()
  const { setAuthState } = useAuthStore()

  useEffect(() => {
    setAuthState(status, session)
  }, [status, session, setAuthState])

  return <>{children}</>
}
