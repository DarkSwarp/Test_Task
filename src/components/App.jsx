import { Layout } from './Layout/Layout';
import { Route, Routes, Navigate } from 'react-router-dom';
import { lazy } from 'react';

const Home = lazy(() => import('../Pages/Home/Home'))
const Catalog = lazy(() => import('../Pages/Catalog/Catalog'));
const Favorites = lazy(() => import('../Pages/Favorites/Favorites'));

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />

          <Route path="/catalog" element={<Catalog />} />
          <Route path="/favorites" element={<Favorites />} />

          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </>
  );
};
