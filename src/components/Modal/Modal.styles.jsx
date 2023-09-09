import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  overflow-y: auto;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(18, 20, 23, 0.5);
  z-index: 100;
`;

export const ModalDiv = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 469px;
  height: 698px;
  border-radius: 24px;
  background: #fff;
  padding: 15px 37px 40px 35px;
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  display: block;
  border-radius: 14px;
  object-fit: cover;
`;

export const Box = styled.div`
  width: 461px;
  height: 242px;
  padding: 25px 3px 40px 5px;
`;

export const Text = styled.p`
  color: #121417;
  font-family: Manrope;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  margin-top: 15px;
  margin-bottom: 0;
  align-items: center;
`;

export const ColorText = styled.span`
  color: #3470ff;
  font-family: Manrope;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
`;

export const TagText = styled.p`
  width: 277px;
  color: rgba(18, 20, 23, 0.5);
  font-family: Manrope;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  margin: 0;
  margin-top: 8px;
`;

export const Wrap = styled.div`
  padding-left: 3px;
  padding-right: 5px;
`;

export const Description = styled.p`
  width: 461px;
  color: #121417;
  font-family: Manrope;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  margin: 0;
  margin-top: 14px;
`;
export const TitleText = styled.p`
  color: #121417;
  font-family: Manrope;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  margin: 0;
  margin-top: 24px;
`;

export const AccessoriesTagText = styled.p`
  width: 461px;
  color: rgba(18, 20, 23, 0.5);
  font-family: Manrope;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  margin: 0;
  margin-top: 8px;
`;

export const RentalConditions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  gap-row: 0px;
  width: 461px;
  color: #363535;
  font-family: Manrope;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  margin: 0;
  margin-top: 8px;
`;

export const RentalText = styled.p`
  display: block;
  padding: 7px 14px;
  border-radius: 35px;
  background: #f9f9f9;
  margin: 0;
`;

export const RentalTextColor = styled.span`
  color: #3470ff;
  font-family: Montserrat;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: 18px;
  letter-spacing: -0.24px;
  margin: 0;
`;

export const Button = styled.a`
  display: block;
  width: 68px;
  height: 20px;
  padding: 12px 50px;
  background: #3470ff;
  color: #fff;
  font-family: Manrope;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px;
  border-radius :12px;
  border: none;
  margin-top: 31px;
  cursor: pointer;
  text-decoration: none;
  transition: color 0.2s ease-in-out;

    &:hover,
    &:focus {
    background: #0B44CD;
`;

export const Icon = styled.svg`
  width: 24px;
  height: 24px;
  fill: currentColor;
  stroke: currentColor;
`;

export const IconButton = styled.button`
  top: 16px;
  right: 16px;
  position: absolute;
  width: 24px;
  height: 24px;
  background: none;
  color: #black;
  border: none;
  padding: 0;
  cursor: pointer;
  transition: color 0.2s ease-in-out;

  &:hover,
  &:focus {
    color: #3470FF;
`;
