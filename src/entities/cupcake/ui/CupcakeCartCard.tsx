import Image from 'next/image'
import { CupCake } from '../types'

export const CupcakeCartCard = ({ cupcake }: { cupcake: CupCake }) => {
  return (
    <article className='grid gap-4 rounded-[1.75rem] border border-[#EDE0D4] p-4 sm:grid-cols-[120px_1fr]'>
      <div className='overflow-hidden rounded-[1.5rem] bg-slate-100'>
        <Image
          src={cupcake.imgUrl}
          alt='Розовый капкейк'
          width={240}
          height={240}
          className='h-full w-full object-cover'
        />
      </div>
      <div className='flex flex-col justify-between gap-4'>
        <div>
          <h3 className='text-lg font-semibold text-slate-900'>{cupcake.name}</h3>
          <p className='mt-2 text-sm text-slate-600'>{cupcake.description}</p>
        </div>
        <div className='flex flex-wrap items-center justify-between gap-3'>
          <div className='flex items-center gap-2 rounded-full border border-[#EDE0D4] bg-[#F7F5F2] px-3 py-2 text-sm'>
            <button type='button' className='text-slate-700'>
              -
            </button>
            <span className='font-semibold text-slate-900'>2</span>
            <button type='button' className='text-slate-700'>
              +
            </button>
          </div>
          <p className='text-lg font-bold text-slate-900'>{cupcake.price}</p>
        </div>
      </div>
    </article>
  )
}
