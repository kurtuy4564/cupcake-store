import Link from 'next/link'

export const Navigation = () => {
  return (
    <nav className='flex items-center gap-4 text-sm font-medium text-slate-700'>
      <Link href='/menu' className='hover:text-slate-900'>
        Меню
      </Link>
      <Link href='/' className='hover:text-slate-900'>
        Хиты сезона
      </Link>
      <Link href='/contact' className='hover:text-slate-900'>
        Контакты
      </Link>
      <Link href='/login' className='hover:text-slate-900'>
        Войти
      </Link>
      <Link href='/register' className='hover:text-slate-900'>
        Регистрация
      </Link>
    </nav>
  )
}
