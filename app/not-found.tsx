import Link from 'next/link'

export default function NotFoundPage() {
  return (
    <section className='min-h-[calc(100vh-4rem)] flex items-center justify-center bg-cream px-6 py-16'>
      <div className='w-full max-w-3xl rounded-[2rem] border border-[#EDE0D4] bg-white p-10 shadow-xl'>
        <div className='space-y-6 text-center'>
          <p className='text-sm font-semibold uppercase tracking-[0.24em] text-slate-500'>
            Страница не найдена
          </p>
          <h1 className='text-5xl font-black text-slate-900'>404</h1>
          <p className='mx-auto max-w-2xl text-base leading-7 text-slate-600'>
            Упс! Кажется, вы попали не туда. Возможно, страница была удалена или URL введён с
            ошибкой.
          </p>
          <div className='space-y-4 flex flex-col items-center justify-center sm:flex-row sm:space-x-4 sm:space-y-0'>
            <Link href='/' className='btn-primary px-6 py-3 text-sm font-semibold w-40'>
              На главную
            </Link>
            <Link href='/menu' className='btn-primary px-6 py-3 text-sm font-semibold w-40'>
              Перейти в меню
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
