import { linkWhatsApp } from '@/lib/links'
import { WhatsappLogo } from '@phosphor-icons/react/dist/ssr'

export default function FAB() {
  return (
    <a
      href={linkWhatsApp}
      target='_blank'
      rel='noopener noreferrer'
      className='fixed bottom-10 right-6 z-50 animate-bounce rounded-full bg-green p-5 text-gray-900 shadow-2xl lg:bottom-20 lg:right-20'>
      <span className='sr-only'>Falar no WhatsApp</span>
      <WhatsappLogo size={48} />
    </a>
  )
}
