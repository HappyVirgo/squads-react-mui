import { FC, ReactNode } from 'react'
import Header from './header'

interface LayoutProps {
  withSidebar?: boolean
  children?: ReactNode,
}

const Layout: FC<LayoutProps> = ({ withSidebar, children }) => {
  return (
    <div className='layout'>
      <Header withSidbar={withSidebar} />
      {children}
    </div>
  )
}

export default Layout
