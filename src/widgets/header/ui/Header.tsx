'use client'

import { Logo } from './Logo'
import { Navigation } from './Navigation'
import { Badge } from '../../../shared/ui/badge'
import Link from 'next/link'
import { CartCounter } from '@/features/cart/ui/CartCounter'
import { Button } from '@/shared/ui/button'
import { signOutUser } from '@/entities/user/actions/sing-out'

export const Header = () => {
  async function handleSingOut() {
    await signOutUser()
  }

  return (
    <header className='flex flex-wrap items-center justify-between gap-4 border-b border-b-[#EDE0D4] pb-5'>
      <Logo />
      <Navigation />

      <Button onClick={handleSingOut} className='hover:text-slate-900'>
        Выйти
      </Button>

      <Link href='/login' className='hover:text-slate-900'>
        Войти
      </Link>
      <Link href='/register' className='hover:text-slate-900'>
        Регистрация
      </Link>

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
    </header>
  )
}
