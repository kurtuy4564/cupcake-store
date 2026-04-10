'use client'

import { Logo } from './Logo'
import { Navigation } from './Navigation'
import { Badge } from '../../../shared/ui/badge'
import Link from 'next/link'
import { CartCounter } from '@/features/cart/ui/CartCounter'
import { Button } from '@/shared/ui/button'
import { signOutUser } from '@/entities/user/actions/sing-out'
import { useSession } from 'next-auth/react'

export const Header = () => {
  const { data: session, status } = useSession()

  console.log(session, status)

  const isAuth = status === 'authenticated'

  async function handleSingOut() {
    await signOutUser()
  }

  return (
    <header className='flex flex-wrap items-center justify-between gap-4 border-b border-b-[#EDE0D4] pb-5'>
      <Logo />
      <Navigation />

      {isAuth ? (
        <div className='space-x-2'>
          <Link
            href='/cart'
            className='btn-primary flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold w-40'>
            <span className='inline-flex items-center gap-2'>
              🛒 Корзина
              <Badge className='bg-white text-slate-900 border border-slate-200 text-[0.65rem] font-semibold leading-none'>
                <CartCounter />
              </Badge>
            </span>
          </Link>

          <Button onClick={handleSingOut} className='hover:text-slate-900'>
            Выйти
          </Button>
        </div>
      ) : (
        <div className='space-x-2'>
          <Link href='/login' className='hover:text-slate-900'>
            Войти
          </Link>
          <Link href='/register' className='hover:text-slate-900'>
            Регистрация
          </Link>
        </div>
      )}
    </header>
  )
}
