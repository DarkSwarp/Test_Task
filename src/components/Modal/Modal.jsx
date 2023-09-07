import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Overlay, ModalDiv } from './Modal.styles';

const modalRoot = document.querySelector('#modal-root');
const Modal = ({ closeModal }) => {
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
        <img
          src="https://auto-time.com.ua/wp-content/uploads/2021/09/1.svg "
          alt="Img"
        />
      </ModalDiv>
    </Overlay>,
    modalRoot
  );
};

export default Modal;