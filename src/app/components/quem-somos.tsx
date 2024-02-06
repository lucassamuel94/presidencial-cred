import pictureProfile02 from '@/assets/person02.png'
import Image from 'next/image'

export default function QuemSomos() {
  return (
    <section>
      <div className='container flex flex-col-reverse items-center border-t border-gray-700 pt-16 lg:flex-row-reverse lg:justify-between'>
        <figure>
          <Image src={pictureProfile02} alt='' quality={100} loading='eager' />
        </figure>

        <div className='space-y-8 py-10 lg:w-[590px]'>
          <h3 className='text-center text-3xl font-bold text-gray-50 lg:text-left lg:text-4xl'>
            Quem Somos
          </h3>
          <p className='font-medium lg:text-lg'>
            Há 17 anos, a Presidencial Cred tem sido a solução confiável para
            problemas financeiros.
            <br />
            <br />
            Nossa sede central está localizada em Monte Alegre/RN, e ao longo
            dos anos, expandimos nossa presença para mais 6 cidades nas regiões
            do Rio Grande do Norte (RN) e Paraíba (PB).
            <br />
            <br />
            Além das lojas físicas, nos destacamos por atender clientes em todo
            o Brasil, proporcionando agilidade e segurança em todas as
            transações.
          </p>
        </div>
      </div>
    </section>
  )
}
