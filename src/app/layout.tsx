import Footer from '@/components/footer'
import FAB from '@/components/ui/fab'
import { cn } from '@/lib/utils'
import { fontHeading, fontSans } from '@/styles/fonts'
import '@/styles/globals.css'
import type { Metadata } from 'next'

type RootLayoutProps = {
  children: React.ReactNode
}

export const metadata: Metadata = {
  title: 'Presidencial Cred',
  description: 'Há 17 anos levando soluções para todo o Brasil'
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang='pt-br' className='scroll-smooth' suppressHydrationWarning>
      <body
        className={cn(
          fontSans.variable,
          fontHeading.variable,
          'min-h-screen bg-gray-800 font-sans text-gray-200 antialiased'
        )}>
        {children}
        <FAB />
        <Footer />
      </body>
    </html>
  )
}
