import './reset.css';
import {useState} from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import PageHome from './Pages/PageHome'
import PageService from './Pages/PageService';
import PageAbout from './Pages/PageAbout';
import PageContact from './Pages/PageContact';
import Header from './Components/Header';
import HeaderMobile from './Components/HeaderMobile';
import Footer from './Components/Footer';
function App() {
  const [currentIndexActive, setCurrentIndexActive] = useState(0);
  const [title, settitle] = useState('')
  const handleBg = (currindex, title) => {
          setCurrentIndexActive(currindex)
          settitle(title)
  }
  return (
    <BrowserRouter>
         <div className="App">
          <Header handleBg={handleBg} currentIndexActive={currentIndexActive} />
          <HeaderMobile />
          <Routes>
               <Route path='/' element={<PageHome />} />
               <Route path='/service' element={<PageService title={title} />} />
               <Route path='/about' element={<PageAbout title={title} />} />
               <Route path='/contact' element={<PageContact title={title} />} />
          </Routes>
          <Footer />
        </div>
    </BrowserRouter>
  );
}

export default App;
