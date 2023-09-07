import { Ul, Conteiner } from './Favorites.styled';

import React from 'react';

import { FavoritesCards } from 'components/Cards/FavoriteCards';

export default function Favorites({ favoritesCars, toggleCars }) {
  return (
    <Conteiner>
      <Ul>
        <FavoritesCards
          favoritesCars={favoritesCars}
          toggleCars={toggleCars}
          catalogCars={null}
        />
      </Ul>
    </Conteiner>
  );
}
