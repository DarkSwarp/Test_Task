import styled from 'styled-components';

export const Text = styled.p`
  color: #121417;
  font-family: Manrope;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  margin-top: 14px;
  margin-bottom: 8px;
  align-items: center;
`;

export const ColorText = styled.span`
  color: #3470ff;
  font-family: Manrope;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
`;

export const TagText = styled.p`
  color: rgba(18, 20, 23, 0.5);
  font-family: Manrope;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  margin: 0;
`;

export const Button = styled.button`
  display: flex;
  width: 274px;
  height: 44px;
  padding: 12px 99px;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  background: #3470ff;
  color: #fff;
  font-family: Manrope;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px;
  border: none;
  cursor: pointer;
  transition: color 0.2s ease-in-out;
 
  &:hover,
  &:focus {
    background: #0B44CD;
`;

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
  padding: 40px 129px 40px 128px;
  width: 1183px;
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 14px;
  background: linear-gradient(
      180deg,
      rgba(18, 20, 23, 0.5) 2.5%,
      rgba(18, 20, 23, 0) 41.07%
    ),
    #f3f3f2;
`;

export const Box = styled.div`
  width: 274px;
  height: 268px;
  position: relative;
`;

export const Li = styled.li`
  width: 274px;
  height: 426px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Wrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Icon = styled.svg`
  width: 18px;
  height: 18px;
  fill: none;
  stroke: currentColor;
`;

export const IconButton = styled.button`
  top: 14px;
  right: 14px;
  position: absolute;
  width: 18px;
  height: 18px;
  background: none;
  color: #fff;
  font-family: Manrope;
  border: none;
  padding: 0;
  cursor: pointer;
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
