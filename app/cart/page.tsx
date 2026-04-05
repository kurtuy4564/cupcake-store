import { CartList } from '@/widgets/card/CartList'
import { CartTotals } from '@/widgets/card/CartTotals'

export default function CartPage() {
  return (
    <section className='space-y-10'>
      <div className='grid gap-6 xl:grid-cols-[1.6fr_0.9fr]'>
        <CartList />
        <CartTotals />
      </div>
    </section>
  )
}
