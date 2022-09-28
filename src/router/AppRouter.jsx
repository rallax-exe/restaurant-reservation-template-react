import { Navigate, Route, Routes } from 'react-router-dom';
import { Restaurants } from '../melp/pages/Restaurants';
import { Search } from '../melp/pages/Search';

export const AppRouter = () => {
  return (
    <>
        <Routes>
            <Route path="search" element={<Search />} />
            <Route path="restaurants" element={<Restaurants />} />
            <Route path="/" element={<Navigate to="/restaurants" />} />
        </Routes>    
    </>
  )
}

