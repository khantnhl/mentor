import './App.css';
import Header from './components/header'
import Footer from './components/footer'
import Home from './pages/home'
import Contact from './pages/contact'
import {BrowserRouter, Routes, Route, Outlet} from "react-router-dom";

function App() {

  const Layout = () => {
    return(
      <>
        <Header/>
        <Outlet/>
        <Footer/>
      </>
    )
  }

  return (
    <>
      <BrowserRouter>
        <Routes>  
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="contact-us" element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
