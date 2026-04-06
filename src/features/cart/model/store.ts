import { CupCake } from '@/entities/cupcake/types'
import { create } from 'zustand'

interface CartState {
  cupcakes: CupCake[]
  add: (cupcake: CupCake) => void
  remove: (index: number) => void
}

export const useCart = create<CartState>(set => ({
  cupcakes: [],
  add: (cupcake: CupCake) => set(state => ({ cupcakes: [...state.cupcakes, cupcake] })),
  remove: (index: number) =>
    set(state => ({
      cupcakes: state.cupcakes.filter((_, i) => i !== index),
    })),
}))
