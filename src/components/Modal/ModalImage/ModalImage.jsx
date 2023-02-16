import { Placeholder } from "./ModalImage.styled";

export const ModalImage = ({ image, tags }) => {
  return (
    <Placeholder>
   <img src={image.largeImageURL} alt=""/>
    </Placeholder>
  );
}




