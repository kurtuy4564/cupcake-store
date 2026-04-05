export const HowWeWork = () => {
  return (
    <div className='rounded-[2rem] border border-[#EDE0D4] bg-white p-8 shadow-sm'>
      <h2 className='text-2xl font-bold text-slate-900'>Как мы работаем</h2>
      <ul className='mt-6 space-y-4 text-sm text-slate-600'>
        <li className='space-y-2 rounded-[1.5rem] border border-[#EDE0D4] bg-[#FFF8F6] p-5'>
          <p className='font-semibold text-slate-900'>Доставка к вам</p>
          <p>Ваш заказ будет доставлен в удобное время по адресу в пределах МКАД.</p>
        </li>
        <li className='space-y-2 rounded-[1.5rem] border border-[#EDE0D4] bg-[#FFF8F6] p-5'>
          <p className='font-semibold text-slate-900'>Праздничные наборы</p>
          <p>Помогаем собрать десертную коллекцию для свадьбы, вечеринки или деловой встречи.</p>
        </li>
        <li className='space-y-2 rounded-[1.5rem] border border-[#EDE0D4] bg-[#FFF8F6] p-5'>
          <p className='font-semibold text-slate-900'>Подарочные сертификаты</p>
          <p>Подарите сладость близким — красивое оформление включено.</p>
        </li>
      </ul>
    </div>
  )
}
