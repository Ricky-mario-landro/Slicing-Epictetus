import Navbar from '../components/navbar';
import Footer from '../components/Footer';

export default function Layout({ children }) {
    return(
      <div className="bg-gradient-to-b from-gray-600 to-gray-900 text-white min-h-screen">
        <Navbar/>
        {children}
        <Footer/>
      </div>
    )
}