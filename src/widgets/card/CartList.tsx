import { featuredCupcakes } from '@/entities/cupcake/config/mocks'
import { CupcakeCartCard } from '@/entities/cupcake/ui/CupcakeCartCard'
import { Fragment } from 'react/jsx-runtime'

export const CartList = () => {
  return (
    <div className='space-y-6 rounded-[2rem] border border-[#EDE0D4] bg-white p-6 shadow-sm'>
      <div className='space-y-4 border-b border-[#EDE0D4] pb-4'>
        <h2 className='text-2xl font-bold text-slate-900'>Товары в корзине</h2>
        <p className='text-sm text-slate-600'>3 позиции</p>
      </div>

      <div className='space-y-4'>
        {featuredCupcakes.map(cupcake => (
          <Fragment key={cupcake.id}>
            <CupcakeCartCard cupcake={cupcake} />
          </Fragment>
        ))}
      </div>
    </div>
  )
}
