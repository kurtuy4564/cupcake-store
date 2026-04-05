import Image from 'next/image'
import React from 'react'

export const FigureImage = () => {
  return (
    <figure className='overflow-hidden rounded-4xl border border-[#EDE0D4] bg-white shadow-xl'>
      <Image
        src='https://static-basket-02.wbbasket.ru/vol25/wbkids_articles_editor/134b0b53-abf9-4b3f-b89e-ef9387cca17d.jpg'
        alt='Набор капкейков на деревянной доске'
        className='h-80 w-full object-cover sm:h-96'
        width={1440}
        height={960}
        sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 720px'
      />
    </figure>
  )
}
