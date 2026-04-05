import Image from 'next/image'
import React from 'react'
import { CapCake } from '../types'
import { AddToCartButton } from '@/features/add-to-cart'

export const CupcakeCard = ({ cupcake }: { cupcake: CapCake }) => {
  return (
    <article key={cupcake.name} className='card overflow-hidden'>
      <Image
        src={cupcake.image}
        alt={cupcake.name}
        className='h-44 w-full object-cover'
        width={900}
        height={600}
        sizes='(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw'
      />
      <div className='p-4 space-y-2'>
        <h3 className='card-title text-lg font-bold'>{cupcake.name}</h3>
        <p className='card-price text-lg'>{cupcake.price}</p>
        
        <AddToCartButton />
      </div>
    </article>
  )
}
