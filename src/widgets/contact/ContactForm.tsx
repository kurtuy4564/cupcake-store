export const ContactForm = () => {
  return (
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
  )
}
