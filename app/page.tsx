'use client'

import { useCupCakeStore } from '@/entities/cupcake/model/store'
import { HeroSelectionMain } from '@/widgets/main/hero-selection'
import { HitsSeason } from '@/widgets/main/hits-season'

export default function Home() {
  const cupcake = useCupCakeStore(state => state.cupcakes)

  return (
    <>
      <HeroSelectionMain />
      <HitsSeason cupcakes={cupcake} />
    </>
  )
}
