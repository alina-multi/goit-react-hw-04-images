import { createPortal } from 'react-dom';
import { Overlay, ModalWindow, ButtonArrow, ModalClose} from './Modal.styled';
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { IconContext } from "react-icons";
import { ModalImage } from './ModalImage/ModalImage';
import { useEffect } from 'react';


export const Modal = ({ image, tags, onClose, currentImages }) => {

  const onOverlayClick = (e) => {
    if(e.currentTarget === e.target) {
      onClose();  
    }
  }

  const onEscClick = (e) => {
    if(e.code === "Escape") {   
      onClose();
    }
  }

  useEffect (() => {
  window.addEventListener("keydown", onEscClick)
  return () => {
    window.removeEventListener("keydown", onEscClick)}
  })

  const onButtonArrowClick = (e) => {
    console.log(e.currentTarget)
    console.log(e.currentTarget.dataset.active)
    console.log(currentImages)
    console.log(image)
    
    const findIndex = currentImages.findIndex(item => item.id === image.id);
    console.log(findIndex);
  }

  return createPortal(
    <IconContext.Provider value={{ size: "5em" }}>
    <Overlay onClick={onOverlayClick}> 
    
    <ModalWindow>
      <ButtonArrow onClick={onButtonArrowClick} data-active="left"> <AiOutlineLeft/></ButtonArrow>

      <ModalImage image={image} tags={tags} />
   <ButtonArrow onClick={onButtonArrowClick} data-active="right"> <AiOutlineRight/></ButtonArrow>
    
    <ModalClose onClick={onClose}>X</ModalClose>
    </ModalWindow>
    </Overlay>
    </IconContext.Provider>
    , document.querySelector("#modal-root")
  );            
};
   
