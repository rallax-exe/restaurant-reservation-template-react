import { Navigate, Route, Routes } from 'react-router-dom';
import { Restaurant, Restaurants, Search, Contact } from '../melp/';
import { Footer, Navbar } from '../ui';
import ScrollToTop from '../melp/hooks/useScrollTop';

export const AppRouter = () => {
  return (
    <>

      <Navbar />
      
      <div className="">
        <ScrollToTop />
        <Routes>
          <Route path="search" element={<Search />} />
          <Route path="contact" element={<Contact />} />
          <Route path="restaurant/:id" element={<Restaurant />} />
          <Route path="/" element={<Restaurants />} />
          <Route path="/*" element={ <Navigate to="/" /> } /> 
        </Routes>
      </div>

      
      <Footer />

    </>
  )
}

