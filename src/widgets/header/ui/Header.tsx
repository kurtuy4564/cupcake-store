import { Logo } from './Logo'
import { Navigation } from './Navigation'
import Link from 'next/link'

export const Header = () => {
  return (
    <header className='flex flex-wrap items-center justify-between gap-4 border-b border-b-[#EDE0D4] pb-5'>
      <Logo />
      <Navigation />
      <Link href='/cart' className='btn-primary px-6 py-3 text-sm font-semibold w-40'>
        🛒 Корзина
      </Link>
    </header>
  )
}
