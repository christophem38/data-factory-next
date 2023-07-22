import Navbar from '@/components/Navbar/Navbar'
import './globals.css'
import type { Metadata } from 'next'
import {ibm_plex_s} from './fonts'

export const metadata: Metadata = {
  title: 'Data Factory AI Tools - Test Server',
  description: 'Showcase of the OPEN AI API functionnality',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={ibm_plex_s.className}>
        <Navbar/>
        {children}
      </body>
    </html>
  )
}
