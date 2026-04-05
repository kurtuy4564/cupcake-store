import { featuredCupcakes } from '@/entities/cupcake/config/mocks'
import { Footer } from '@/widgets/footer'
import { Header } from '@/widgets/header/'
import { HeroSelectionMain } from '@/widgets/hero-selection'
import { HitsSeason } from '@/widgets/hits-season'

export default function Home() {
  return (
    <div className='min-h-screen bg-cream text-slate-900'>
      <div className='mx-auto w-full max-w-7xl px-6 py-8 lg:py-12'>
        <Header />
        <main>
          <HeroSelectionMain />
          <HitsSeason cupcakes={featuredCupcakes} />
        </main>
        <Footer />
      </div>
    </div>
  )
}
