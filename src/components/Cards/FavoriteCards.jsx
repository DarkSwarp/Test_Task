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
      {favoritesCars.map(favoritesCar => {
        const parts = favoritesCar.address.split(', ');
        const city = parts[1];
        const country = parts[2];
        let functionalities;
        if (favoritesCar.functionalities[0].length <= 25) {
          functionalities = favoritesCar.functionalities[0];
        } else if (favoritesCar.functionalities[1].length <= 25) {
          functionalities = favoritesCar.functionalities[1];
        } else if (favoritesCar.functionalities[2].length <= 25) {
          functionalities = favoritesCar.functionalities[2];
        } else if (favoritesCar.functionalities[0].length <= 25) {
          functionalities = favoritesCar.functionalities[0];
        } else if (favoritesCar.functionalities[1].length <= 25) {
          functionalities = favoritesCar.functionalities[1];
        } else if (favoritesCar.functionalities[2].length <= 25) {
          functionalities = favoritesCar.functionalities[2];
        }
        const tagText = `${city} | ${country} | ${favoritesCar.rentalCompany} | Premium ${favoritesCar.type} | ${favoritesCar.model} | ${favoritesCar.id} | ${functionalities}`;
        return (
          <Li key={favoritesCar.id}>
            <div>
              <Box>
                <Img src={favoritesCar.img} alt="car" />
                <IconButton onClick={() => toggleCars(favoritesCar)}>
                  <FavoriteIcon>
                    <use href={icon + '#icon-heart'}></use>
                  </FavoriteIcon>
                </IconButton>
              </Box>
              <Wrap>
                <Text>
                  {favoritesCar.make}
                  {favoritesCar.model && (
                    <ColorText> {favoritesCar.model}</ColorText>
                  )}
                  , {favoritesCar.year}
                </Text>
                <Text>
                  <span>{favoritesCar.rentalPrice}</span>
                </Text>
              </Wrap>
              <TagText>{tagText}</TagText>
            </div>
            <ModalButton catalogCar={favoritesCar} />
          </Li>
        );
      })}
    </>
  );
};
