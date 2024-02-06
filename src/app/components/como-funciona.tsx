import { Calculator, Money, UserFocus } from '@phosphor-icons/react/dist/ssr'
import { ReactNode } from 'react'

type ItemType = {
  id: string,
  icon: ReactNode,
  name: string,
  content: string
}

export default function ComoFunciona() {
  const data: Array<ItemType> = [
    {
      id: '126e7e8b-2f39-4397-8fe7-8bdf478b7ab4',
      icon: <Calculator className='size-10' />,
      name: 'Consulta Online',
      content:
        'Faça uma simulação online gratuita para descobrir as opções disponíveis para você.'
    },
    {
      id: 'f89ba3e2-ccc3-434e-88aa-fd162ff12aaa',
      icon: <UserFocus className='size-10' />,
      name: 'Atendimento Personalizado',
      content:
        'Nossa equipe entrará em contato para entender suas necessidades e orientá-lo sobre a melhor escolha.'
    },
    {
      id: 'b2de72b5-4a49-4816-a9d0-9a22d793ea0d',
      icon: <Money className='size-10' />,
      name: 'Recebimento do Crédito',
      content:
        'Assim que aprovado, o valor será disponibilizado conforme a modalidade escolhida.'
    }
  ]
  return (
    <section className='bg-gray-900'>
      <div className='container flex flex-col items-center gap-16 py-20 lg:gap-20'>
        <div className='max-w-[590px] space-y-4 text-center'>
          <h3 className='text-3xl font-bold text-gray-50 lg:text-4xl'>
            Como funciona
          </h3>
          <p className='text-gray-300 lg:text-xl'>
            Entenda como funciona nosso atendimento e realize seu empréstimo
            agora
          </p>
        </div>

        <ul className='grid grid-cols-1 gap-8 lg:grid-cols-3'>
          {data.map(({ id, name, content, icon }) => (
            <li
              key={id}
              className='flex flex-col items-center gap-6 rounded-md bg-gray-700 p-8 text-center duration-300 hover:scale-105 hover:transition-all'>
              <figure className='bg-brand-50 text-brand-700 rounded-full p-3'>
                {icon}
              </figure>
              <h4 className='text-50 text-xl font-bold'>{name}</h4>

              <p className='text-sm text-gray-300 lg:text-base'>{content}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
