import './App.css';
import Header from './components/Header';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer'
import CartProvider from './components/context/context.provider';
import ProductData from './components/ProductData';
function App() {
  return (
    <CartProvider>
      <Header/>
      <div className='sectionContainer'>
      <ProductData/>
      <Testimonials/>
      <Footer/> 
      </div>
    </CartProvider>
   
  );
}

export default App;
