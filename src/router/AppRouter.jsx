import { Navigate, Route, Routes } from 'react-router-dom';

import { Restaurants, Search } from '../melp/';
import { Navbar } from '../ui';

export const AppRouter = () => {
  return (
    <>

        <Navbar />

        <Routes>
            <Route path="search" element={<Search />} />
            <Route path="restaurants" element={<Restaurants />} />
            <Route path="/" element={<Navigate to="/restaurants" />} />
        </Routes>    
    </>
  )
}

