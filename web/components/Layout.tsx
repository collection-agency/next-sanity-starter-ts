import Header from './Header'
import Footer from './Footer'

const Layout: React.FC = ({ children }) => {
  return (
    <div className='overflow-x-hidden' data-testid='layout'>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
