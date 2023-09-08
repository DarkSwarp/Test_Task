import ModalButton from 'components/ModalBtn/ModalBtn';
import {
  Img,
  Li,
  Wrap,
  Text,
  ColorText,
  TagText,
  Box,
  IconButton,
  FavoriteIcon,
} from './Cards.styled';
import icon from 'assets/icons/icons.svg';

export const FavoritesCards = ({ favoritesCars, toggleCars }) => {
  return (
    <>
      {favoritesCars.map(favoritesCars => {
        const parts = favoritesCars.address.split(', ');
        const city = parts[1];
        const country = parts[2];
        const tagText = `${city} | ${country} | ${favoritesCars.rentalCompany} | ${favoritesCars.model} | ${favoritesCars.id}`;
        return (
          <Li key={favoritesCars.id}>
            <div>
              <Box>
                <Img src={favoritesCars.img} alt="car" />
                <IconButton onClick={() => toggleCars(favoritesCars)}>
                  <FavoriteIcon>
                    <use href={icon + '#icon-heart'}></use>
                  </FavoriteIcon>
                </IconButton>
              </Box>
              <Wrap>
                <Text>
                  {favoritesCars.make}
                  {favoritesCars.model && (
                    <ColorText> {favoritesCars.model}</ColorText>
                  )}
                  , {favoritesCars.year}
                </Text>
                <Text>
                  <span>${favoritesCars.rentalPrice}</span>
                </Text>
              </Wrap>
              <TagText>{tagText}</TagText>
            </div>
            <ModalButton />
          </Li>
        );
      })}
    </>
  );
};
