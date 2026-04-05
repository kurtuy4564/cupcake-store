import Image from 'next/image'

export default function ContactPage() {
  return (
    <section className='space-y-10'>
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
              <p className='mt-3 text-lg font-bold text-slate-900'>+7 (495) 123-45-67</p>
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

      <div className='grid gap-6 lg:grid-cols-[1.15fr_0.85fr]'>
        <div className='rounded-[2rem] border border-[#EDE0D4] bg-white p-8 shadow-sm'>
          <h2 className='text-2xl font-bold text-slate-900'>Как мы работаем</h2>
          <ul className='mt-6 space-y-4 text-sm text-slate-600'>
            <li className='space-y-2 rounded-[1.5rem] border border-[#EDE0D4] bg-[#FFF8F6] p-5'>
              <p className='font-semibold text-slate-900'>Доставка к вам</p>
              <p>Ваш заказ будет доставлен в удобное время по адресу в пределах МКАД.</p>
            </li>
            <li className='space-y-2 rounded-[1.5rem] border border-[#EDE0D4] bg-[#FFF8F6] p-5'>
              <p className='font-semibold text-slate-900'>Праздничные наборы</p>
              <p>
                Помогаем собрать десертную коллекцию для свадьбы, вечеринки или деловой встречи.
              </p>
            </li>
            <li className='space-y-2 rounded-[1.5rem] border border-[#EDE0D4] bg-[#FFF8F6] p-5'>
              <p className='font-semibold text-slate-900'>Подарочные сертификаты</p>
              <p>Подарите сладость близким — красивое оформление включено.</p>
            </li>
          </ul>
        </div>

        <div className='rounded-[2rem] border border-[#EDE0D4] bg-white p-8 shadow-sm'>
          <h2 className='text-2xl font-bold text-slate-900'>Оставьте заявку</h2>
          <p className='mt-2 text-sm text-slate-600'>
            Мы свяжемся с вами в течение часа и поможем подобрать десерт.
          </p>
          <form className='mt-6 space-y-4'>
            <div className='grid gap-4'>
              <label className='block'>
                <span className='text-sm font-medium text-slate-700'>Имя</span>
                <input
                  type='text'
                  placeholder='Алексей'
                  className='mt-2 w-full rounded-2xl border border-[#EDE0D4] bg-[#F7F5F2] px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-mint focus:ring-2 focus:ring-mint/20'
                />
              </label>
              <label className='block'>
                <span className='text-sm font-medium text-slate-700'>Email</span>
                <input
                  type='email'
                  placeholder='example@mail.ru'
                  className='mt-2 w-full rounded-2xl border border-[#EDE0D4] bg-[#F7F5F2] px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-mint focus:ring-2 focus:ring-mint/20'
                />
              </label>
            </div>

            <label className='block'>
              <span className='text-sm font-medium text-slate-700'>Сообщение</span>
              <textarea
                rows={4}
                placeholder='Я хочу заказать набор капкейков для праздника...'
                className='mt-2 w-full rounded-2xl border border-[#EDE0D4] bg-[#F7F5F2] px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-mint focus:ring-2 focus:ring-mint/20'
              />
            </label>

            <button
              type='button'
              className='btn-primary w-full bg-mint text-white shadow-lg hover:bg-[#84c7a0]'>
              Отправить заявку
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
