import { Navigate, Route, Routes } from 'react-router-dom';

import { Restaurant, Restaurants, Search } from '../melp/';
import { Navbar } from '../ui';

export const AppRouter = () => {
  return (
    <>

        <Navbar />

        <div className="">
          <Routes>
              <Route path="search" element={<Search />} />
              <Route path="restaurants" element={<Restaurants />} />
              <Route path="restaurant/:id" element={<Restaurant />} />
              <Route path="/" element={<Navigate to="/restaurants" />} />
          </Routes>    
        </div>        
    </>
  )
}

