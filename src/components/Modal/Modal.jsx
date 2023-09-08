import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import {
  Overlay,
  ModalDiv,
  Box,
  Img,
  ColorText,
  Text,
  TagText,
  Wrap,
  Description,
  TitleText,
  AccessoriesTagText,
  RentalConditions,
  RentalText,
  RentalTextColor,
  Button,
} from './Modal.styles';

const modalRoot = document.querySelector('#modal-root');
const Modal = ({ closeModal, catalogCar }) => {
  const parts = catalogCar.address.split(', ');
  const city = parts[1];
  const country = parts[2];
  const tagText = `${city} | ${country} | Id: ${catalogCar.id} | ${catalogCar.year} | Type: ${catalogCar.type} | Consumption: ${catalogCar.fuelConsumption} | Engine Size: ${catalogCar.engineSize}`;
  const rentalCondition = catalogCar.rentalConditions.split('\n');
  const match = rentalCondition[0].match(/\d+/);
  let number;
  if (match) {
    number = parseInt(match[0], 10);
  }
  useEffect(() => {
    document.body.style.overflow = 'hidden';

    const closeModalByEsc = e => {
      if (e.code === 'Escape') {
        closeModal();
      }
    };

    document.addEventListener('keydown', closeModalByEsc);

    return () => {
      document.body.style.overflow = 'auto';
      document.removeEventListener('keydown', closeModalByEsc);
    };
  });

  const handleOverlayClick = e => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return createPortal(
    <Overlay onClick={handleOverlayClick}>
      <ModalDiv>
        <Box>
          <Img src={catalogCar.img} alt="car" />
          <Text>
            {catalogCar.make}
            {catalogCar.model && (
              <ColorText> {catalogCar.model}</ColorText>
            )}, {catalogCar.year}
          </Text>
        </Box>
        <Wrap>
          <TagText>{tagText}</TagText>
          <Description>{catalogCar.description}</Description>
          <TitleText>Accessories and functionalities:</TitleText>
          <AccessoriesTagText>
            {catalogCar.accessories.join(' | ')}
            <br />
            {catalogCar.functionalities.join(' | ')}
          </AccessoriesTagText>
          <TitleText>Rental Conditions:</TitleText>
          <RentalConditions>
            <RentalText>
              Minimum age: <RentalTextColor>{number}</RentalTextColor>
            </RentalText>
            <RentalText>{rentalCondition[1]}</RentalText>
            <RentalText>{rentalCondition[2]}</RentalText>
            <RentalText>
              Mileage: <RentalTextColor>{catalogCar.mileage}</RentalTextColor>
            </RentalText>
            <RentalText>
              Price: <RentalTextColor>{catalogCar.rentalPrice}</RentalTextColor>
            </RentalText>
          </RentalConditions>
          <Button>Rental car</Button>
        </Wrap>
      </ModalDiv>
    </Overlay>,
    modalRoot
  );
};

export default Modal;
