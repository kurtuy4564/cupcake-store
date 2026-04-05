import Image from 'next/image'

export const ContactInfo = () => {
  return (
    <div className='grid gap-6 lg:grid-cols-[1.2fr_0.8fr]'>
      <div className='space-y-6 rounded-[2rem] border border-[#EDE0D4] bg-white p-8 shadow-xl'>
        <div className='space-y-3'>
          <p className='text-sm font-semibold uppercase tracking-[0.24em] text-slate-500'>
            Контакты
          </p>
          <h1 className='text-4xl font-black tracking-tight text-slate-900 md:text-5xl'>
            Свяжитесь с нами
          </h1>
          <p className='max-w-3xl text-base text-slate-600 md:text-lg'>
            У вас есть вопрос о капкейках, доставке или заказе на праздник? Мы всегда на связи и
            рады помочь подобрать десерт для любого случая.
          </p>
        </div>

        <div className='grid gap-4 sm:grid-cols-2'>
          <div className='rounded-[1.5rem] border border-[#EDE0D4] bg-[#FFF8F6] p-5'>
            <p className='text-sm font-semibold uppercase tracking-[0.24em] text-slate-500'>
              Адрес
            </p>
            <p className='mt-3 text-lg font-bold text-slate-900'>ул. Сладкая, 18</p>
            <p className='mt-2 text-sm text-slate-600'>Москва, Россия</p>
          </div>
          <div className='rounded-[1.5rem] border border-[#EDE0D4] bg-[#FFF8F6] p-5'>
            <p className='text-sm font-semibold uppercase tracking-[0.24em] text-slate-500'>
              Часы работы
            </p>
            <p className='mt-3 text-lg font-bold text-slate-900'>10:00 — 22:00</p>
            <p className='mt-2 text-sm text-slate-600'>Ежедневно, включая выходные</p>
          </div>
        </div>

        <div className='grid gap-4 sm:grid-cols-2'>
          <div className='rounded-[1.5rem] border border-[#EDE0D4] bg-[#FFF8F6] p-5'>
            <p className='text-sm font-semibold uppercase tracking-[0.24em] text-slate-500'>
              Телефон
            </p>
            <p className='mt-3 text-lg font-bold text-slate-900'>+7 (444) 444-44-44</p>
            <p className='mt-2 text-sm text-slate-600'>Звоните для заказа и консультации</p>
          </div>
          <div className='rounded-[1.5rem] border border-[#EDE0D4] bg-[#FFF8F6] p-5'>
            <p className='text-sm font-semibold uppercase tracking-[0.24em] text-slate-500'>
              Почта
            </p>
            <p className='mt-3 text-lg font-bold text-slate-900'>hello@cupcake-store.ru</p>
            <p className='mt-2 text-sm text-slate-600'>Ответим в течение часа</p>
          </div>
        </div>

        <div className='rounded-[1.75rem] border border-[#EDE0D4] bg-rose-50 p-6'>
          <p className='text-sm font-semibold uppercase tracking-[0.24em] text-rose-700'>
            Специальное предложение
          </p>
          <h2 className='mt-3 text-2xl font-bold text-slate-900'>Заказ торта на праздник</h2>
          <p className='mt-2 text-sm text-slate-600'>
            Закажите капкейки для дня рождения или корпоративного события — мы подготовим красивую
            коробку и подарочный пакет.
          </p>
        </div>
      </div>

      <div className='overflow-hidden rounded-[2rem] bg-slate-50'>
        <Image
          src='https://main-cdn.sbermegamarket.ru/big2/hlr-system/125/492/180/112/119/9/100044350587b1.jpg'
          alt='Кондитер с коробкой капкейков'
          className='h-full w-full object-cover'
          width={1200}
          height={1600}
          sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 45vw'
        />
      </div>
    </div>
  )
}
