import { useCupCakeStore } from '@/entities/cupcake/model/store'
import { CupcakeCartCard } from '@/entities/cupcake/ui/CupcakeCartCard'
import { Fragment } from 'react/jsx-runtime'

export const CartList = () => {
    const cupcake = useCupCakeStore(state => state.cupcakes)

  return (
    <div className='space-y-6 rounded-[2rem] border border-[#EDE0D4] bg-white p-6 shadow-sm'>
      <div className='space-y-4 border-b border-[#EDE0D4] pb-4'>
        <h2 className='text-2xl font-bold text-slate-900'>Товары в корзине</h2>
        <p className='text-sm text-slate-600'>3 позиции</p>
      </div>

      <div className='space-y-4'>
        {cupcake.map(cupcake => (
          <Fragment key={cupcake.id}>
            <CupcakeCartCard cupcake={cupcake} />
          </Fragment>
        ))}
      </div>
    </div>
  )
}
