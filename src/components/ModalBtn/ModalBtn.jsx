import { useState } from 'react';
import { ModalBtn, ModalBtnText } from './ModalBtn.styled';
import Modal from '../Modal/Modal';

const ModalButton = ({ catalogCar }) => {
  const [isShowModal, setIsShowModal] = useState(false);
  const openModal = () => {
    setIsShowModal(true);
  };
  const closeModal = () => {
    setIsShowModal(false);
  };
  return (
    <>
      <ModalBtn onClick={openModal} type="button">
        <ModalBtnText>Learn more</ModalBtnText>
      </ModalBtn>
      {isShowModal && <Modal closeModal={closeModal} catalogCar={catalogCar} />}
    </>
  );
};
export default ModalButton;
