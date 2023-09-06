import {
  Ul,
  Conteiner,
  Img,
  Li,
  Wrap,
  Text,
  ColorText,
  TagText,
  Button,
  Box,
  Icon,
  IconButton,
  LoadMoreButton,
  BoxButton,
} from './Catalog.styled';
import icon from 'assets/icons/icons.svg';

import { fetchCars } from 'redux/carSlice/operation';
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect, useState } from 'react';
import { selectCars } from 'redux/carSlice/selectors';

export default function Catalog() {
  const dispatch = useDispatch();
  const cars = useSelector(selectCars);
  const [page, setPage] = useState(1);
  const limit = 8;

  const clickLoadMore = () => {
    setPage(state => state + 1);
  };

  useEffect(() => {
    dispatch(fetchCars({ page, limit }));
  }, [dispatch, page]);

  const arrayCars = cars.reviews || [];
  return (
    <Conteiner>
      <Ul>
        {arrayCars.map(arrayCar => {
          return (
            <Li key={arrayCar._id}>
              <div>
                <Box>
                  <Img src={arrayCar.avatarURL} alt="car" />
                  <IconButton>
                    <Icon>
                      <use href={icon + '#icon-heart'}></use>
                    </Icon>
                  </IconButton>
                </Box>
                <Wrap>
                  <Text>
                    {arrayCar.name}
                    {arrayCar.name && (
                      <ColorText> {arrayCar.name}</ColorText>
                    )}, {arrayCar.name}
                  </Text>
                  <Text>
                    <span>${arrayCar.name}</span>
                  </Text>
                </Wrap>
                <TagText>
                  {arrayCar.review && arrayCar.review.split(' ').join(' | ')}
                </TagText>
              </div>
              <Button type="button">Learn more</Button>
            </Li>
          );
        })}
      </Ul>
      <BoxButton>
        <LoadMoreButton type="button" onClick={clickLoadMore}>
          Load more
        </LoadMoreButton>
      </BoxButton>
    </Conteiner>
  );
}
