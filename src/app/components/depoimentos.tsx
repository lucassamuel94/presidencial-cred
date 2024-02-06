import { Button } from '@/components/ui/button'
import { linkInstagram } from '@/lib/links'
import { InstagramLogo, User } from '@phosphor-icons/react/dist/ssr'

export default function Depoimentos() {
  return (
    <section className='container flex flex-col items-center gap-16 py-16 lg:gap-20 lg:py-20'>
      <h3 className='text-center text-3xl font-bold text-gray-50 lg:text-left lg:text-4xl'>
        Depoimentos de Clientes Satisfeitos
      </h3>

      <div className='grid grid-cols-1 items-center gap-8 md:grid-cols-2'>
        <blockquote className='flex max-w-[384px] flex-col items-center gap-8 rounded-md bg-gray-700 p-8 text-center transition-all duration-300 hover:scale-105'>
          <p className='text-lg'>
            &quot;A Presidencial Cred foi minha escolha certa para um empréstimo
            consignado. Rápidos, eficientes e com ótimas taxas!&quot;
          </p>

          <div className='flex flex-col gap-3'>
            <figure className='grid size-16 place-items-center rounded-full bg-gray-200 text-gray-700'>
              <User size={32} />
            </figure>
            <cite>Maria S.</cite>
          </div>
        </blockquote>

        <blockquote className='flex h-max max-w-[384px] flex-col items-center gap-8 rounded-md bg-gray-700 p-8 text-center transition-all duration-300 hover:scale-105'>
          <p className='text-lg'>
            &quot;O crédito pessoal na conta de luz facilitou muito a minha
            vida. Super recomendo a Presidencial Cred!&quot;
          </p>

          <div className='flex flex-col gap-3'>
            <figure className='grid size-16 place-items-center rounded-full bg-gray-200 text-gray-700'>
              <User size={32} />
            </figure>
            <cite>João M.</cite>
          </div>
        </blockquote>
      </div>

      <Button
        variant={`primary`}
        asChild
        className='flex-wrap gap-2 overflow-hidden text-sm'>
        <a
          href={linkInstagram}
          target='_blank'
          rel='noopener noreferrer'
          className=''>
          <InstagramLogo size={24} />
          <span className='text-wrap text-center'>
            Clique aqui e veja mais depoimentos emocionantes
          </span>
        </a>
      </Button>
    </section>
  )
}
