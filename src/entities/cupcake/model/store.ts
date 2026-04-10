import { create } from 'zustand'
import { CupCake } from '../types'
import { featuredCupcakes } from '../config/mocks'

interface CupCakeState {
  cupcakes: CupCake[]
  isLoading: boolean
  setCupcakes: (cupcakes: CupCake[]) => void
  addCupcake: (cupcake: CupCake) => void
  removeCupcake: (id: number) => void
}

export const useCupCakeStore = create<CupCakeState>(set => ({
  cupcakes: [...featuredCupcakes],
  isLoading: false,

  setCupcakes: (cupcakes: CupCake[]) => set({ cupcakes }),
  addCupcake: (cupcake: CupCake) => set(state => ({ cupcakes: [cupcake, ...state.cupcakes] })),
  removeCupcake: (id: number) =>
    set(state => ({
      cupcakes: state.cupcakes.filter(c => c.id !== id),
    })),
}))
