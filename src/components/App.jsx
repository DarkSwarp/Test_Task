import { Layout } from './Layout/Layout';
import { Route, Routes, Navigate } from 'react-router-dom';
import { lazy } from 'react';
import { useState, useEffect } from 'react';

const Home = lazy(() => import('../Pages/Home/Home'));
const Catalog = lazy(() => import('../Pages/Catalog/Catalog'));
const Favorites = lazy(() => import('../Pages/Favorites/Favorites'));

export const App = () => {
  const [cars, setCars] = useState(
    () => JSON.parse(window.localStorage.getItem('car')) ?? []
  );
  useEffect(() => {
    window.localStorage.setItem('car', JSON.stringify(cars));
  }, [cars]);

  const toggleCars = ( arrayCar ) => {
    setCars(state => {
      const index = state.findIndex(item => {
        return item.id === arrayCar.id;
      });

      if (index === -1) {
        return [...state, arrayCar].map(item => {
          return { ...item, like: 1 };
        });
      } else {
        return state.filter(item => item.id !== arrayCar.id);
      }
    });
  };

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />

          <Route
            path="/catalog"
            element={<Catalog toggleCars={toggleCars} favoritesCars={cars} />}
          />
          <Route
            path="/favorites"
            element={<Favorites favoritesCars={cars} toggleCars={toggleCars} />}
          />

          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </>
  );
};
