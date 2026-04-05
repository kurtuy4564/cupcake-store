import { Logo } from './Logo'
import { Navigation } from './Navigation'

export const Header = () => {
  return (
    <header className='flex flex-wrap items-center justify-between gap-4 border-b border-b-[#EDE0D4] pb-5'>
      <Logo />
      <Navigation />
      <button className='btn-primary'>🛒 Корзина</button>
    </header>
  )
}
