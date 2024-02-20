import Footer from '@/components/footer'
import FAB from '@/components/ui/fab'
import { cn } from '@/lib/utils'
import { fontHeading, fontSans } from '@/styles/fonts'
import '@/styles/globals.css'
import type { Metadata } from 'next'
import Script from 'next/script'

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
      <meta
        name='facebook-domain-verification'
        content='tvjpotttjnevme84fevx1ub9ek7itk'
      />
      <Script
        id='fb-pixel'
        strategy='afterInteractive'
        dangerouslySetInnerHTML={{
          __html: `
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '884566266684252');
          fbq('track', 'PageView');
          `
        }}
      />

      <noscript>
        <img
          height='1'
          width='1'
          style={{ display: 'none' }}
          src='https://www.facebook.com/tr?id=884566266684252&ev=PageView&noscript=1'
        />
      </noscript>

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
