import pictureMapa from '@/assets/mapa.png'
import { Button } from '@/components/ui/button'
import { linkWhatsApp } from '@/lib/links'
import { WhatsappLogo } from '@phosphor-icons/react/dist/ssr'
import Image from 'next/image'

export default function CTA() {
  return (
    <section className='bg-cta bg-cover bg-center px-2 py-20 lg:px-0'>
      <div className='container flex flex-col items-center rounded-2xl bg-white/90 py-16 lg:py-20'>
        <Image src={pictureMapa} alt='' quality={100} />

        <div className='mx-auto max-w-[590px] text-center'>
          <h3 className='text-3xl font-bold text-gray-900 lg:text-4xl'>
            Precisando de dinheiro?
          </h3>
          <p className='mt-4 text-gray-600 lg:text-xl'>
            Nós podemos te ajudar, temos varias opções de empréstimo, clique no
            botão abaixo para saber mais.
          </p>
        </div>

        <Button
          variant={'primary'}
          className='mt-10 gap-3 font-semibold'
          asChild>
          <a href={linkWhatsApp} target='_blank' rel='noopener noreferrer'>
            <WhatsappLogo size={32} />
            <span className='uppercase'>Solicite agora mesmo</span>
          </a>
        </Button>
      </div>
    </section>
  )
}
