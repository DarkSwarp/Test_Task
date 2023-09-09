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
  Icon,
} from './Cards.styled';
import icon from 'assets/icons/icons.svg';

export const CatalogCards = ({ catalogCars, toggleCars, favoritesCars }) => {
  return (
    <>
      {catalogCars.map(catalogCar => {
        const parts = catalogCar.address.split(', ');
        const city = parts[1];
        const country = parts[2];
        let functionalities;
        if (catalogCar.functionalities[0].length <= 25) {
          functionalities = catalogCar.functionalities[0];
        } else if (catalogCar.functionalities[1].length <= 25) {
          functionalities = catalogCar.functionalities[1];
        } else if (catalogCar.functionalities[2].length <= 25) {
          functionalities = catalogCar.functionalities[2];
        } else if (catalogCar.accessories[0].length <= 25) {
          functionalities = catalogCar.accessories[0];
        } else if (catalogCar.accessories[1].length <= 25) {
          functionalities = catalogCar.accessories[1];
        } else if (catalogCar.accessories[2].length <= 25) {
          functionalities = catalogCar.accessories[2];
        }

        const tagText = `${city} | ${country} | ${catalogCar.rentalCompany} | Premium ${catalogCar.type} | ${catalogCar.model} | ${catalogCar.id} | ${functionalities}`;

        return (
          <Li key={catalogCar.id}>
            <div>
              <Box>
                <Img src={catalogCar.img} alt="car" />
                <IconButton onClick={() => toggleCars(catalogCar)}>
                  {favoritesCars &&
                    favoritesCars.findIndex(
                      favoritesCar => favoritesCar.id === catalogCar.id
                    ) > -1 && (
                      <FavoriteIcon>
                        <use href={icon + '#icon-heart'}></use>
                      </FavoriteIcon>
                    )}
                  {favoritesCars &&
                    favoritesCars.findIndex(favoritesCar => {
                      return favoritesCar.id === catalogCar.id;
                    }) === -1 && (
                      <Icon>
                        <use href={icon + '#icon-heart'}></use>
                      </Icon>
                    )}
                  {!favoritesCars && (
                    <Icon>
                      <use href={icon + '#icon-heart'}></use>
                    </Icon>
                  )}
                </IconButton>
              </Box>
              <Wrap>
                <Text>
                  {catalogCar.make}
                  {catalogCar.model && (
                    <ColorText> {catalogCar.model}</ColorText>
                  )}
                  , {catalogCar.year}
                </Text>
                <Text>
                  <span>{catalogCar.rentalPrice}</span>
                </Text>
              </Wrap>
              <TagText>{tagText}</TagText>
            </div>
            <ModalButton catalogCar={catalogCar} />
          </Li>
        );
      })}
    </>
  );
};
