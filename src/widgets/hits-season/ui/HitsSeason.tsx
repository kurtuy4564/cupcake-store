import { CupcakeCard } from '@/entities/cupcake'
import { CapCake } from '@/entities/cupcake/types'
import React, { Fragment } from 'react'

export const HitsSeason = ({ cupcakes }: { cupcakes: CapCake[] }) => {
  return (
    <section id='hits' className='mt-16 pb-10'>
      <h2 className='text-2xl font-extrabold tracking-tight text-slate-900'>Хиты сезона</h2>
      <p className='mt-2 max-w-2xl text-sm text-slate-600'>
        Откройте для себя самые популярные вкусы этого месяца. Лимитированные позиции, готовые к
        заказу.
      </p>

      <div className='mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4'>
        {cupcakes.map(cupcake => (
          <Fragment key={cupcake.id}>
            <CupcakeCard cupcake={cupcake} />
          </Fragment>
        ))}
      </div>
    </section>
  )
}
