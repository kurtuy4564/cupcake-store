import { create } from 'zustand'
import { CupCake } from '../types'
import { featuredCupcakes } from '../config/mocks'

interface CupCakeState {
  cupcakes: CupCake[]
}

export const useCupCakeStore = create<CupCakeState>(set => ({
  cupcakes: [...featuredCupcakes],
}))
