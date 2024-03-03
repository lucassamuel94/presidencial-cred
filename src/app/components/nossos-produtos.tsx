'use client'

import aposentadoriaINSS from '@/assets/aposentadoINSS.jpg'
import bolsaFamilia from '@/assets/bolsaFamilia.jpeg'
import contaEnergia from '@/assets/contaEnergia.jpg'
import loas from '@/assets/loas.jpg'
import saqueFGTS from '@/assets/saqueFGTS.jpg'

import { Button } from '@/components/ui/button'
import { linkWhatsApp } from '@/lib/links'
import { WhatsappLogo } from '@phosphor-icons/react'
import { Check } from '@phosphor-icons/react/dist/ssr'
import Image, { StaticImageData } from 'next/image'

type ProductType = {
  id: string,
  name: string,
  image: StaticImageData,
  features: Array<string>
}

export default function NossosProdutos() {
  const data: Array<ProductType> = [
    {
      id: 'c9c91f74-454f-4fea-abb9-1917cedbf2e4',
      name: 'Aposentado INSS',
      image: aposentadoriaINSS,
      features: [
        'Liberação rápida',
        'Até R$ 23 Mil para quem recebe um salário mínimo',
        'Liberamos até 80 anos e 11 meses'
      ]
    },
    {
      id: 'b719534d-fac2-4518-b110-b15a5d48960d',
      name: 'Saque FGTS',
      image: saqueFGTS,
      features: [
        'Sem mensalidade',
        'Em até 3 horas na sua conta via PIX',
        'Simule grátis'
      ]
    },
    {
      id: '30b03c60-0ccc-4290-b94e-6dcaac51df81',
      name: 'BPC / LOAS',
      image: loas,
      features: [
        'Liberamos até R$ 18.500,00 + Cartão de Crédito Consignado',
        'Direto na sua conta',
        'Simule no WhatsApp'
      ]
    },
    {
      id: 'eb793330-fa1f-4fc9-a823-6dd86eb74710',
      name: 'Crédito Pessoal na CONTA DE LUZ',
      image: contaEnergia,
      features: [
        'Atendemos o estado do RN - CE - BA - PE - RS - SP',
        'Em até 24hs na sua conta',
        'Desconto na conta de luz'
      ]
    },
    {
      id: 'bcfc54e2-7ef0-4637-8ed1-cb19d9e18eab',
      name: 'Programa Bolsa Família',
      image: bolsaFamilia,
      features: [
        'Crédito Pessoal Crefisa',
        '⁠⁠Até R$ 700,00',
        '⁠⁠Obrigatório Caixa Tem'
      ]
    }
  ]
  return (
    <section className='container space-y-16 py-16 lg:space-y-20 lg:py-20'>
      <h2 className='text-center text-3xl font-bold lg:text-4xl'>
        Nossos Produtos e Serviços
      </h2>

      <ul className='grid grid-cols-1 gap-x-8 gap-y-24 md:grid-cols-2  lg:gap-y-16'>
        {data.map(item => (
          <li key={item.id}>
            <Image
              src={item.image}
              alt=''
              quality={100}
              className='rounded-lg object-cover object-center'
            />

            <div className='mb-6 mt-10 space-y-6'>
              <h3 className='text-lg font-bold lg:text-2xl'>{item.name}</h3>

              <div className='flex flex-col gap-3'>
                {item.features.map((feature, index) => (
                  <div
                    key={`${feature}+${index}`}
                    className='inline-flex items-center gap-3'>
                    <Check className='text-green' />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <Button asChild>
              <a href={linkWhatsApp} target='_blank' rel='noopener noreferrer'>
                <WhatsappLogo size={32} />
                <span className='uppercase'>Simular agora</span>
              </a>
            </Button>
          </li>
        ))}
      </ul>
    </section>
  )
}
