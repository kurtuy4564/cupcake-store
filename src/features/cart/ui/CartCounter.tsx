import { useCart } from '@/features/cart/model/store'

export const CartCounter = ({ classname }: { classname?: string }) => {
  const cartItemCount = useCart(state => state.cupcakes.length)

  return <div className={classname}>{cartItemCount}</div>
}
