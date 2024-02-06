import ComoFunciona from './components/como-funciona'
import CTA from './components/cta'
import Depoimentos from './components/depoimentos'
import Hero from './components/hero'
import NossosProdutos from './components/nossos-produtos'
import QuemSomos from './components/quem-somos'

export default function HomeApp() {
  return (
    <main className='overflow-x-hidden'>
      <Hero />
      <NossosProdutos />
      <CTA />
      <ComoFunciona />
      <Depoimentos />
      <QuemSomos />
    </main>
  )
}
