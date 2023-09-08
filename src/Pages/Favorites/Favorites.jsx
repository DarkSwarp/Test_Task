import { Ul, Conteiner, LoadMoreButton, BoxButton } from './Favorites.styled';
import { useState } from 'react';
import React from 'react';

import { FavoritesCards } from 'components/Cards/FavoriteCards';

export default function Favorites({ favoritesCars, toggleCars }) {
  const [limit, setLimit] = useState(8);
  const clickLoadMore = () => {
    setLimit(state => state + 8);
  };

  const cars = favoritesCars.slice(0, limit);

  return (
    <Conteiner>
      <Ul>
        <FavoritesCards
          favoritesCars={cars}
          toggleCars={toggleCars}
          catalogCars={null}
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
