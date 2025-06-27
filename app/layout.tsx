import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'random go brrrrrrrrrr',
  description: 'Created by Swapnil',
  generator: 'git go haha',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
