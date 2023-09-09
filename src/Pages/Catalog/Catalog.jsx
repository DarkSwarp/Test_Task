import {
  Ul,
  Conteiner,
  LoadMoreButton,
  BoxButton,
  Wrap,
} from './Catalog.styled';
import React, {  useState } from 'react';

import { CatalogCards } from 'components/Cards/CatalogCards';
import { Search } from 'components/Search/Search';

export default function Catalog({
  toggleCars,
  favoritesCars,
  cars,
  filterCatalogCars,
  carsArray,
  inputPrice,
}) {
  const [limit, setLimit] = useState(8);

  const clickLoadMore = () => {
    setLimit(state => state + 8);
  };

  const catalogCars = cars.slice(0, limit) || [];
  return (
    <Wrap>
      <Search
        filterCatalogCars={filterCatalogCars}
        carsArray={carsArray}
        inputPrice={inputPrice}
      />
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
    </Wrap>
  );
}
