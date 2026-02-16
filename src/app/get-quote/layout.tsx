
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import { PropsWithChildren } from 'react'

const layout = ({ children }: PropsWithChildren) => {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  )
}

export default layout