import Navbar from '@/components/Navbar'
import 'bootswatch/dist/lux/bootstrap.min.css'
import { Inter } from 'next/font/google'
import "./globals.css"

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'TOP-MAN',
  description: 'Transport Operations Management',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <link href="https://cdn.jsdelivr.net/npm/remixicon@3.4.0/fonts/remixicon.css" rel="stylesheet"/>
      <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'/>
      </head>
      <body className={inter.className}>
        {children}
        </body>
    </html>
  )
}
