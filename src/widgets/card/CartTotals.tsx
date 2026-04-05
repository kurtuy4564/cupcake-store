export const CartTotals = () => {
  return (
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
        <p className='mt-2'>
          Доставка осуществляется в течение 1-2 рабочих дней. Оплата наличными или картой при
          получении.
        </p>
      </div>
    </aside>
  )
}
