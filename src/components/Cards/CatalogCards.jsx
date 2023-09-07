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
        return (
          <Li key={catalogCar._id}>
            <div>
              <Box>
                <Img src={catalogCar.avatarURL} alt="car" />
                <IconButton onClick={() => toggleCars(catalogCar)}>
                  {favoritesCars &&
                    favoritesCars.findIndex(
                      favoritesCar => favoritesCar._id === catalogCar._id
                    ) > -1 && (
                      <FavoriteIcon>
                        <use href={icon + '#icon-heart'}></use>
                      </FavoriteIcon>
                    )}
                  {favoritesCars &&
                    favoritesCars.findIndex(favoritesCar => {
                      return favoritesCar._id === catalogCar._id;
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
                  {catalogCar.name}
                  {catalogCar.name && <ColorText> {catalogCar.name}</ColorText>}
                  , {catalogCar.name}
                </Text>
                <Text>
                  <span>${catalogCar.name}</span>
                </Text>
              </Wrap>
              <TagText>
                {catalogCar.review && catalogCar.review.split(' ').join(' | ')}
              </TagText>
            </div>
            <ModalButton />
          </Li>
        );
      })}
    </>
  );
};
