import Link from 'next/link'

export default function Footer() {
  return (
    <footer>
      <div className='container flex flex-col items-start justify-between gap-4 border-t border-gray-700 py-16 text-gray-400 sm:flex-row lg:items-center'>
        <Link href={'/'} className='text-xl font-bold uppercase'>
          Presidencial Cred
        </Link>

        <span className='text-sm'>Todos os direitos reservados</span>
        <span className='text-sm'>CNPJ - 13.510.256/0001-90</span>
      </div>
    </footer>
  )
}
