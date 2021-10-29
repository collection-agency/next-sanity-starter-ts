import Header from 'components/Header'
import Footer from 'components/Footer'

const Layout: React.FC = ({ children }) => {
  return (
    <div className='overflow-x-hidden'>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
