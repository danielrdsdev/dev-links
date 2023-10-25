import { cn } from '@/lib/utils'
import '../styles/globals.css'

import { BackgroundImage } from '@/components/background-image'
import { inter } from '@/styles/fonts'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Daniel Rodrigues | Dev Links',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body
        className={cn(
          'bg-background text-foreground dark relative flex min-h-screen items-center justify-center font-sans',
          inter.variable,
        )}
      >
        <BackgroundImage
          src="/glow-homepage-mobile.webp"
          className="md:hidden"
        />
        <BackgroundImage
          src="/glow-homepage-tablet.webp"
          className="hidden md:block lg:hidden"
        />
        <BackgroundImage
          src="/glow-homepage.webp"
          className="hidden lg:block"
        />

        {children}
      </body>
    </html>
  )
}
