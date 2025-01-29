import { BrowserRouter, Routes, Route } from 'react-router';
import Home from './components/home/Home.tsx'
import Layout from './components/Layout.tsx'
import Cases from './components/cases/Cases.tsx'
import About from './components/about/About.tsx'
import Contact from './components/contact/Contact.tsx'
import Formulario from './components/home/Formulario.tsx';
import Profile from './components/home/Profile.tsx'
import Tips from './components/about/Tips.tsx';
import MyJob from './components/about/MyJob.tsx';
import Clientes from './components/cases/Clientes.tsx'
import Logros from './components/cases/Logros.tsx'
import Colaborar from './components/cases/Colaborar.tsx'
import Redes from './components/contact/Redes.tsx'
import DejaMensaje from './components/contact/DejaMensaje.tsx'
import Llamame from './components/contact/Llamame.tsx'
import Bio from './components/about/Bio.tsx'


function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route path="/home" element={<Home />} />
          <Route path="/home/formulario" element={<Formulario />} />
          <Route path="/home/perfil" element={<Profile />} />

          <Route path="/about" element={<About />} />
          <Route path="/about/bio" element={<Bio />} />
          <Route path="/about/trabajo" element={<MyJob />} />
          <Route path="/about/tips" element={<Tips />} />

          <Route path="/exitCases" element={<Cases />} />
          <Route path="/exitCases/clientes" element={<Clientes />} />
          <Route path="/exitCases/logros" element={<Logros />} />
          <Route path="/exitCases/colaborar" element={<Colaborar />} />

          <Route path="/contact" element={<Contact />} />
          <Route path="/contact/redes" element={<Redes />} />
          <Route path="/contact/dejaUnMensaje" element={<DejaMensaje />} />
          <Route path="/contact/llamame" element={<Llamame />} />
   	   </Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
