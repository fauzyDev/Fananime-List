import { Ubuntu } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'

const ubuntu = Ubuntu({ weight: "700", subsets: ['latin'] })

export const metadata = {
  title: 'Anime Spot Light',
  description: 'Project Web List Anime',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={ubuntu.className} suppressHydrationWarning={true}>
        <Navbar/>
        {children}
      </body>
    </html>
  )
}
