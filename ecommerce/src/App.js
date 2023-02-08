import './App.css';
import Header from './components/Header';
import Banner from './components/Banner';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer'
function App() {
  return (
    <div className="App">
      <Header/>
      <Banner/>
      <Testimonials/>
      <Footer/>
    </div>
  );
}

export default App;
