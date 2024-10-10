import './App.css';
import Header from './components/header'
import Footer from './components/footer'
import Home from './pages/home'
import InputMentor from './components/InputMentor'
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
            <Route path="/add-mentor" element={<InputMentor/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
