import type { Metadata } from 'next'
import { Barlow_Condensed, DM_Sans } from 'next/font/google'
import './globals.css'

const barlowCondensed = Barlow_Condensed({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800', '900'],
  variable: '--font-barlow-condensed',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-dm-sans',
})

export const metadata: Metadata = {
  title: 'Drew Callahan · Personal Training',
  description:
    '1:1 coaching built around your life, your schedule, and the results you\'ve been chasing. In-person or online. No cookie-cutter programs.',
  generator: 'v0.app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${barlowCondensed.variable} ${dmSans.variable} bg-[#0D0D0D]`}>
      <body className="font-body antialiased text-[#F5F5F5]">{children}</body>
    </html>
  )
}
