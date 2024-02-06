import { WhatsappLogo } from '@phosphor-icons/react/dist/ssr'

export default function FAB() {
  return (
    <a
      href='http://'
      target='_blank'
      rel='noopener noreferrer'
      className='bg-green fixed bottom-10 right-6 z-50 animate-bounce rounded-full p-5 text-gray-900 shadow-2xl lg:bottom-20 lg:right-20'>
      <WhatsappLogo size={48} />
    </a>
  )
}
