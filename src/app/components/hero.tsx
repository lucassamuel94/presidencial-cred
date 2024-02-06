import pictureLogo from '@/assets/logo.svg'
import pictureHero from '@/assets/person01.png'

import { Button } from '@/components/ui/button'
import { linkWhatsApp } from '@/lib/links'
import { WhatsappLogo } from '@phosphor-icons/react/dist/ssr'

import Image from 'next/image'

export default function Hero() {
  return (
    <div className='bg-hero bg-cover bg-left lg:bg-center'>
      <div className='container flex flex-col-reverse items-center py-10 text-center md:pb-0 lg:h-[640px] lg:flex-row lg:justify-between lg:text-left'>
        <div className='mx-auto max-w-[488px]'>
          <Image
            src={pictureLogo}
            alt='Logo da Presidencial Cred'
            className='hidden lg:block'
          />

          <h2 className='mt-16 text-3xl font-bold text-gray-900 lg:text-5xl'>
            Precisando de Dinheiro? Vamos te ajudar!
          </h2>
          <p className='mt-6 text-gray-700 lg:text-lg'>
            Bem-vindo à Presidencial Cred, sua parceira confiável em soluções de
            crédito. Oferecemos uma variedade de opções para atender às suas
            necessidades financeiras.
          </p>

          <Button
            variant={'whatsapp'}
            className='mt-10 gap-3 font-semibold'
            asChild>
            <a href={linkWhatsApp} target='_blank' rel='noopener noreferrer'>
              <WhatsappLogo size={32} />
              <span className='uppercase'>SIMULE AGORA MESMO</span>
            </a>
          </Button>
        </div>

        <figure className='h-full md:flex md:items-end'>
          <Image
            src={pictureHero}
            alt='Especialista Isabelle sorrindo com notas de 100 reais na mão'
            quality={100}
            className='pl-6 lg:pl-0'
          />
        </figure>
      </div>
    </div>
  )
}
