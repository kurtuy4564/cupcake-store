'use client'

import { CupcakeCard } from '@/entities/cupcake'
import { useCupCakeStore } from '@/entities/cupcake/model/store'

export default function MenuPage() {
  const cupcake = useCupCakeStore(state => state.cupcakes)

  return (
    <section id='menu' className='space-y-10'>
      <div className='rounded-[2rem] border border-[#EDE0D4] bg-white p-8 shadow-xl'>
        <div className='space-y-4'>
          <p className='text-sm font-semibold uppercase tracking-[0.24em] text-slate-500'>Меню</p>
          <h1 className='text-4xl font-black tracking-tight text-slate-900 md:text-5xl'>
            Наш ассортимент капкейков
          </h1>
          <p className='max-w-3xl text-base text-slate-600 md:text-lg'>
            Все позиции в одном месте — классика, фруктовые вкусы и авторские десерты. Выберите
            капкейк по настроению и добавьте его в корзину.
          </p>
        </div>

        <div className='mt-6 flex flex-wrap gap-3'>
          <span className='rounded-full bg-rose-100 px-4 py-2 text-sm font-medium text-rose-700'>
            {cupcake.length} позиции
          </span>
          <span className='rounded-full bg-mint px-4 py-2 text-sm font-medium text-white'>
            Свежие вкусы каждый день
          </span>
        </div>
      </div>

      <div className='grid gap-6 md:grid-cols-2 xl:grid-cols-4'>
        {cupcake.map(cupcake => (
          <CupcakeCard key={cupcake.id} cupcake={cupcake} />
        ))}
      </div>
    </section>
  )
}
