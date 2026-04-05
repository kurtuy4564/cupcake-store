import { featuredCupcakes } from '@/entities/cupcake/config/mocks'
import { HeroSelectionMain } from '@/widgets/main/hero-selection'
import { HitsSeason } from '@/widgets/main/hits-season'

export default function Home() {
  return (
    <>
      <HeroSelectionMain />
      <HitsSeason cupcakes={featuredCupcakes} />
    </>
  )
}
