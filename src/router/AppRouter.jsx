import { Navigate, Route, Routes } from 'react-router-dom';
import { Restaurant, Restaurants, Search } from '../melp/';
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
          <Route path="restaurants" element={<Restaurants />} />
          <Route path="restaurant/:id" element={<Restaurant />} />
          <Route path="/" element={<Navigate to="/restaurants" />} />
        </Routes>
      </div>

      
      <Footer />

    </>
  )
}

