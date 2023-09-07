import {
  Img,
  Li,
  Wrap,
  Text,
  ColorText,
  TagText,
  Button,
  Box,
  IconButton,
  FavoriteIcon,
} from './Cards.styled';
import icon from 'assets/icons/icons.svg';

export const FavoritesCards = ({ favoritesCars, toggleCars }) => {
  return (
    <>
      {favoritesCars.map(favoritesCars => {
        return (
          <Li key={favoritesCars._id}>
            <div>
              <Box>
                <Img src={favoritesCars.avatarURL} alt="car" />
                <IconButton onClick={() => toggleCars( favoritesCars )}>
                  <FavoriteIcon>
                    <use href={icon + '#icon-heart'}></use>
                  </FavoriteIcon>
                </IconButton>
              </Box>
              <Wrap>
                <Text>
                  {favoritesCars.name}
                  {favoritesCars.name && (
                    <ColorText> {favoritesCars.name}</ColorText>
                  )}, {favoritesCars.name}
                </Text>
                <Text>
                  <span>${favoritesCars.name}</span>
                </Text>
              </Wrap>
              <TagText>
                {favoritesCars.review && favoritesCars.review.split(' ').join(' | ')}
              </TagText>
            </div>
            <Button type="button">Learn more</Button>
          </Li>
        );
      })}
    </>
  );
};
