import { CustomBabge } from '@/shared/ui/CustomBabge'
import { FigureImage } from '@/shared/ui/FigureImage'
import Link from 'next/link'

export const HeroSelectionMain = () => {
  return (
    <section
      className='relative grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-center'
      aria-label='Hero section'>
      <article className='space-y-6 space-x-3'>
        <CustomBabge>Хиты вкуса</CustomBabge>
        <CustomBabge>Рекомендация шефа</CustomBabge>
        <h1 className='text-4xl font-black leading-tight text-slate-900 md:text-5xl'>
          Сладкие моменты каждый день
        </h1>
        <p className='max-w-xl text-base text-slate-600 md:text-lg'>
          Наша коллекция свежих капкейков создана, чтобы радовать глаз и сердце: мягкий крем, тонкий
          вкус и пастельная эстетика. Выберите любимый — доверьтесь вкусу.
        </p>
        <div className='flex flex-wrap gap-4'>
          <Link href='/menu' className='btn-primary px-6 py-3 text-sm font-semibold w-40'>
            Смотреть меню
          </Link>
        </div>
      </article>

      <FigureImage
        src='https://static-basket-02.wbbasket.ru/vol25/wbkids_articles_editor/134b0b53-abf9-4b3f-b89e-ef9387cca17d.jpg'
        alt='Набор капкейков на деревянной доске'
      />
    </section>
  )
}
