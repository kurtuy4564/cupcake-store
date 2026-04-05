import { featuredCupcakes } from '@/entities/cupcake/config/mocks'
import { Header } from '@/widgets/header/'
import Image from 'next/image'

export default function Home() {
  return (
    <div className='min-h-screen bg-cream text-slate-900'>
      <div className='mx-auto w-full max-w-7xl px-6 py-8 lg:py-12'>
        <Header />

        <main>
          <section
            className='relative mt-10 grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-center'
            aria-label='Hero section'>
            <article className='space-y-6'>
              <p className='inline-flex items-center gap-2 rounded-full border border-[#EDE0D4] bg-white px-3 py-1 text-xs font-semibold text-slate-700 shadow-sm'>
                Хиты вкуса • Рекомендация шефа
              </p>
              <h1 className='text-4xl font-black leading-tight text-slate-900 md:text-5xl'>
                Сладкие моменты каждый день
              </h1>
              <p className='max-w-xl text-base text-slate-600 md:text-lg'>
                Наша коллекция свежих капкейков создана, чтобы радовать глаз и сердце: мягкий крем,
                тонкий вкус и пастельная эстетика. Выберите любимый — доверьтесь вкусу.
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

            <figure className='overflow-hidden rounded-[2rem] border border-[#EDE0D4] bg-white shadow-xl'>
              <Image
                src='https://static-basket-02.wbbasket.ru/vol25/wbkids_articles_editor/134b0b53-abf9-4b3f-b89e-ef9387cca17d.jpg'
                alt='Набор капкейков на деревянной доске'
                className='h-80 w-full object-cover sm:h-96'
                width={1440}
                height={960}
                sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 720px'
              />
            </figure>
          </section>

          <section id='hits' className='mt-16 pb-10'>
            <h2 className='text-2xl font-extrabold tracking-tight text-slate-900'>Хиты сезона</h2>
            <p className='mt-2 max-w-2xl text-sm text-slate-600'>
              Откройте для себя самые популярные вкусы этого месяца. Лимитированные позиции, готовые
              к заказу.
            </p>

            <div className='mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4'>
              {featuredCupcakes.map(cupcake => (
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
                    <button className='btn-primary w-full bg-[#F8C1CC] text-white hover:bg-[#f4a6b5]'>
                      В корзину
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </main>

        <footer
          id='contacts'
          className='rounded-2xl border border-[#EDE0D4] bg-white p-6 text-sm text-slate-500'>
          <p>© 2026 Cupcake Store. Все права защищены.</p>
          <p className='mt-1'>Адрес: ул. Сладкая, 18 | Телефон: +7 (495) 123-45-67</p>
        </footer>
      </div>
    </div>
  )
}
