import Link from 'next/link'

export default function Footer() {
  return (
    <footer>
      <div className='container flex flex-col items-center justify-between gap-4 border-t border-gray-700 py-16 text-gray-400 sm:flex-row'>
        <Link href={'/'} className='text-xl font-bold uppercase'>
          Presidencial Prev
        </Link>

        <span className='text-sm'>Todos os direitos reservados</span>
      </div>
    </footer>
  )
}
