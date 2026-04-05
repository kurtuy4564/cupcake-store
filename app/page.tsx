import { featuredCupcakes } from '@/entities/cupcake/config/mocks'
import { HeroSelectionMain } from '@/widgets/hero-selection'
import { HitsSeason } from '@/widgets/hits-season'

export default function Home() {
  return (
    <>
      <HeroSelectionMain />
      <HitsSeason cupcakes={featuredCupcakes} />
    </>
  )
}
