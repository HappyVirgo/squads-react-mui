import { FC, ReactNode } from 'react'
import Header from '../components/header'
// import './layout.scss'

type LayoutProps = {
  children?: ReactNode,
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className='layout'>
      <Header />
      {children}
    </div>
  )
}

export default Layout
