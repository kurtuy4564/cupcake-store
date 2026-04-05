import Link from 'next/link'

export const Logo = () => {
  return (
    <Link href='/' className='flex items-center gap-3 text-lg font-bold text-slate-900'>
      <span className='h-10 w-10 rounded-full bg-mint flex items-center justify-center text-base font-bold text-white'>
        C
      </span>
      Cupcake
    </Link>
  )
}
