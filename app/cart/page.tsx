import Image from 'next/image'

export default function CartPage() {
  return (
    <section className='space-y-10'>
      <div className='rounded-[2rem] border border-[#EDE0D4] bg-white p-8 shadow-xl'>
        <div className='space-y-4'>
          <p className='text-sm font-semibold uppercase tracking-[0.24em] text-slate-500'>Корзина</p>
          <h1 className='text-4xl font-black tracking-tight text-slate-900 md:text-5xl'>
            Ваши сладкие покупки
          </h1>
          <p className='max-w-3xl text-base text-slate-600 md:text-lg'>
            Проверьте состав заказа, измените количество или перейдите к оплате. Всё готово
            для вкусного завершения покупки.
          </p>
        </div>
      </div>

      <div className='grid gap-6 xl:grid-cols-[1.6fr_0.9fr]'>
        <div className='space-y-6 rounded-[2rem] border border-[#EDE0D4] bg-white p-6 shadow-sm'>
          <div className='space-y-4 border-b border-[#EDE0D4] pb-4'>
            <h2 className='text-2xl font-bold text-slate-900'>Товары в корзине</h2>
            <p className='text-sm text-slate-600'>3 позиции</p>
          </div>

          <div className='space-y-4'>
            <article className='grid gap-4 rounded-[1.75rem] border border-[#EDE0D4] p-4 sm:grid-cols-[120px_1fr]'>
              <div className='overflow-hidden rounded-[1.5rem] bg-slate-100'>
                <Image
                  src='https://static-basket-02.wbbasket.ru/vol25/wbkids_articles_editor/134b0b53-abf9-4b3f-b89e-ef9387cca17d.jpg'
                  alt='Розовый капкейк'
                  width={240}
                  height={240}
                  className='h-full w-full object-cover'
                />
              </div>
              <div className='flex flex-col justify-between gap-4'>
                <div>
                  <h3 className='text-lg font-semibold text-slate-900'>Розовый Вельвет</h3>
                  <p className='mt-2 text-sm text-slate-600'>Нежный капкейк с кремовой начинкой и ягодным оформлением.</p>
                </div>
                <div className='flex flex-wrap items-center justify-between gap-3'>
                  <div className='flex items-center gap-2 rounded-full border border-[#EDE0D4] bg-[#F7F5F2] px-3 py-2 text-sm'>
                    <button type='button' className='text-slate-700'>-</button>
                    <span className='font-semibold text-slate-900'>2</span>
                    <button type='button' className='text-slate-700'>+</button>
                  </div>
                  <p className='text-lg font-bold text-slate-900'>640 ₽</p>
                </div>
              </div>
            </article>

            <article className='grid gap-4 rounded-[1.75rem] border border-[#EDE0D4] p-4 sm:grid-cols-[120px_1fr]'>
              <div className='overflow-hidden rounded-[1.5rem] bg-slate-100'>
                <Image
                  src='https://main-cdn.sbermegamarket.ru/big2/hlr-system/125/492/180/112/119/9/100044350587b1.jpg'
                  alt='Шоколадный капкейк'
                  width={240}
                  height={240}
                  className='h-full w-full object-cover'
                />
              </div>
              <div className='flex flex-col justify-between gap-4'>
                <div>
                  <h3 className='text-lg font-semibold text-slate-900'>Шоколад с Малиной</h3>
                  <p className='mt-2 text-sm text-slate-600'>Сочный шоколадный капкейк с малиновым акцентом.</p>
                </div>
                <div className='flex flex-wrap items-center justify-between gap-3'>
                  <div className='flex items-center gap-2 rounded-full border border-[#EDE0D4] bg-[#F7F5F2] px-3 py-2 text-sm'>
                    <button type='button' className='text-slate-700'>-</button>
                    <span className='font-semibold text-slate-900'>1</span>
                    <button type='button' className='text-slate-700'>+</button>
                  </div>
                  <p className='text-lg font-bold text-slate-900'>350 ₽</p>
                </div>
              </div>
            </article>

            <article className='grid gap-4 rounded-[1.75rem] border border-[#EDE0D4] p-4 sm:grid-cols-[120px_1fr]'>
              <div className='overflow-hidden rounded-[1.5rem] bg-slate-100'>
                <Image
                  src='https://st.aestatic.net/items-img-2/R/1/B/6/A66adf12a8b5146ce8b9aca2d9a83c905q.jpeg_960x960.jpg'
                  alt='Лимонный капкейк'
                  width={240}
                  height={240}
                  className='h-full w-full object-cover'
                />
              </div>
              <div className='flex flex-col justify-between gap-4'>
                <div>
                  <h3 className='text-lg font-semibold text-slate-900'>Лимонный Капкейк</h3>
                  <p className='mt-2 text-sm text-slate-600'>Свежий цитрусовый вкус с нежным кремом.</p>
                </div>
                <div className='flex flex-wrap items-center justify-between gap-3'>
                  <div className='flex items-center gap-2 rounded-full border border-[#EDE0D4] bg-[#F7F5F2] px-3 py-2 text-sm'>
                    <button type='button' className='text-slate-700'>-</button>
                    <span className='font-semibold text-slate-900'>3</span>
                    <button type='button' className='text-slate-700'>+</button>
                  </div>
                  <p className='text-lg font-bold text-slate-900'>870 ₽</p>
                </div>
              </div>
            </article>
          </div>
        </div>

        <aside className='space-y-6 rounded-[2rem] border border-[#EDE0D4] bg-white p-8 shadow-sm'>
          <div className='space-y-3'>
            <h2 className='text-2xl font-bold text-slate-900'>Итог заказа</h2>
            <p className='text-sm text-slate-600'>Проверьте сумму перед оплатой.</p>
          </div>

          <div className='space-y-4 rounded-[1.75rem] bg-[#FFF8F6] p-5'>
            <div className='flex items-center justify-between text-sm text-slate-600'>
              <span>Товары</span>
              <span>1 860 ₽</span>
            </div>
            <div className='flex items-center justify-between text-sm text-slate-600'>
              <span>Доставка</span>
              <span>150 ₽</span>
            </div>
            <div className='flex items-center justify-between text-sm font-semibold text-slate-900'>
              <span>Скидка</span>
              <span>-100 ₽</span>
            </div>
          </div>

          <div className='flex items-center justify-between text-lg font-bold text-slate-900'>
            <span>Итого</span>
            <span>1 910 ₽</span>
          </div>

          <button className='btn-primary w-full bg-mint text-white shadow-lg hover:bg-[#84c7a0]'>
            Оформить заказ
          </button>

          <div className='rounded-[1.5rem] border border-[#EDE0D4] bg-[#F7F5F2] p-4 text-sm text-slate-600'>
            <p className='font-semibold text-slate-900'>Внимание</p>
            <p className='mt-2'>Доставка осуществляется в течение 1-2 рабочих дней. Оплата наличными или картой при получении.</p>
          </div>
        </aside>
      </div>
    </section>
  )
}
