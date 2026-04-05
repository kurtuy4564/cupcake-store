import { CustomBabge } from '@/shared/ui/CustomBabge'
import { FigureImage } from '@/shared/ui/FigureImage'

export const HeroSelectionMain = () => {
  return (
    <section
      className='relative mt-10 grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-center'
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
          <a href='#menu' className='btn-primary'>
            Смотреть меню
          </a>
          <a
            href='#hits'
            className='btn-primary border-0 bg-mint text-white shadow-lg hover:bg-[#84c7a0]'>
            Хиты сезона
          </a>
        </div>
      </article>

      <FigureImage />
    </section>
  )
}
