import {
  Ul,
  Conteiner,
  LoadMoreButton,
  BoxButton,
} from './Catalog.styled';

import { fetchCars } from 'redux/carSlice/operation';
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect, useState } from 'react';
import { selectCars } from 'redux/carSlice/selectors';
import { CatalogCards } from 'components/Cards/CatalogCards';

export default function Catalog({ toggleCars, favoritesCars }) {
  const dispatch = useDispatch();
  const cars = useSelector(selectCars);
  const [limit, setLimit] = useState(8);
  const page = 1;

  const clickLoadMore = () => {
    setLimit(state => state + 8);
  };

  useEffect(() => {
    dispatch(fetchCars({ page, limit }));
  }, [dispatch, limit]);

  const catalogCars = cars || [];
  return (
    <Conteiner>
      <Ul>
        <CatalogCards
          catalogCars={catalogCars}
          toggleCars={toggleCars}
          favoritesCars={favoritesCars}
        />
      </Ul>
      <BoxButton>
        <LoadMoreButton type="button" onClick={clickLoadMore}>
          Load more
        </LoadMoreButton>
      </BoxButton>
    </Conteiner>
  );
}
