import styled from 'styled-components';

export const Ul = styled.ul`
  display: flex;
  row-gap: 50px;
  column-gap: 29px;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  width: 1183px;
`;

export const Conteiner = styled.section`
  display: flex;
  flex-direction: column;
  padding: 0px 129px 0px 128px;
  width: 1183px;
  margin-top: 50px;
`;

export const LoadMoreButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 85px;
  height: 24px;
  color: #3470ff;
  font-family: Manrope;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  border: none;
  background: none;
  padding: 0;
  text-decoration-line: underline;
  cursor: pointer;
  transition: color 0.2s ease-in-out;

    &:hover,
    &:focus {
    color: #0B44CD;
`;

export const BoxButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 100px;
`;

export const Wrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 42px;
`;

