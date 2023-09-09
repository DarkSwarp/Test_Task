import { Layout } from './Layout/Layout';
import { Route, Routes, Navigate } from 'react-router-dom';
import { lazy } from 'react';
import { useState, useEffect } from 'react';
import { fetchCars } from 'redux/carSlice/operation';
import { useDispatch, useSelector } from 'react-redux';
import { selectCars } from 'redux/carSlice/selectors';

const Home = lazy(() => import('../Pages/Home/Home'));
const Catalog = lazy(() => import('../Pages/Catalog/Catalog'));
const Favorites = lazy(() => import('../Pages/Favorites/Favorites'));

export const App = () => {
  const dispatch = useDispatch();
  const catalogCars = useSelector(selectCars);
  const [filterCar, setFilterCar] = useState(catalogCars);

  let inputPrice = [];
  let inputPriceFavorite = [];
  let carsArray;
  let carsArrayFavorite;
  let pricesArrayFavorite;
  let pricesArray;
  const [cars, setCars] = useState(
    () => JSON.parse(window.localStorage.getItem('car')) ?? []
  );
  useEffect(() => {
    window.localStorage.setItem('car', JSON.stringify(cars));
  }, [cars]);

  const [filterFavorite, setFilterFavorite] = useState(cars);

  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);

  useEffect(() => {
    setFilterCar(catalogCars);
  }, [catalogCars]);

  useEffect(() => {
    setFilterFavorite(cars);
  }, [cars]);

  if (catalogCars) {
    const tempCarsArray = catalogCars.map(catalogCar => catalogCar.make);
    carsArray = tempCarsArray.filter((array, index, newArray) => {
      return newArray.indexOf(array) === index;
    });
    pricesArray = catalogCars.map(catalogCar =>
      parseInt(catalogCar.rentalPrice.replace('$', ''))
    );
  }

  if (cars) {
    const tempCarsArray = cars.map(car => car.make);
    carsArrayFavorite = tempCarsArray.filter((array, index, newArray) => {
      return newArray.indexOf(array) === index;
    });
    pricesArrayFavorite = cars.map(car =>
      parseInt(car.rentalPrice.replace('$', ''))
    );
  }

  for (let i = 10; i <= Math.max(...pricesArray); i += 10) {
    inputPrice.push(i);
  }

  for (let i = 10; i <= Math.max(...pricesArrayFavorite); i += 10) {
    inputPriceFavorite.push(i);
  }

  const toggleCars = arrayCar => {
    setCars(state => {
      const index = state.findIndex(item => {
        return item.id === arrayCar.id;
      });

      if (index === -1) {
        return [...state, arrayCar];
      } else {
        return state.filter(item => item.id !== arrayCar.id);
      }
    });
  };

  const filterCatalogCars = (make, price, mileageFrom, mileageTo) => {
    setFilterCar(
      catalogCars.filter(catalogCar => {
        if (make && catalogCar.make !== make) return false;
        if (
          price &&
          parseInt(catalogCar.rentalPrice.replace('$', '')) < parseInt(price)
        )
          return false;
        if (mileageFrom && catalogCar.mileage < parseInt(mileageFrom))
          return false;
        if (mileageTo && catalogCar.mileage > parseInt(mileageTo)) return false;
        return true;
      })
    );

    return filterCar;
  };

  const filterFavoriteCars = (make, price, mileageFrom, mileageTo) => {
    setFilterFavorite(
      cars.filter(car => {
        if (make && car.make !== make) return false;
        if (
          price &&
          parseInt(car.rentalPrice.replace('$', '')) < parseInt(price)
        )
          return false;
        if (mileageFrom && car.mileage < parseInt(mileageFrom)) return false;
        if (mileageTo && car.mileage > parseInt(mileageTo)) return false;
        return true;
      })
    );

    return filterFavorite;
  };

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />

          <Route
            path="/catalog"
            element={
              <Catalog
                filterCatalogCars={filterCatalogCars}
                carsArray={carsArray}
                inputPrice={inputPrice}
                toggleCars={toggleCars}
                favoritesCars={cars}
                cars={filterCar}
              />
            }
          />
          <Route
            path="/favorites"
            element={
              <Favorites
                filterFavoriteCars={filterFavoriteCars}
                carsArray={carsArrayFavorite}
                inputPrice={inputPriceFavorite}
                favoritesCars={filterFavorite}
                toggleCars={toggleCars}
              />
            }
          />

          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </>
  );
};
