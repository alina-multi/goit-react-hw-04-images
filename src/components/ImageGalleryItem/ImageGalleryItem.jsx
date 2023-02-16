
import { Item, Image } from "./ImageGalleryItem.styled";
import { nanoid } from "nanoid";

   export const ImageGalleryItem =({images})=>{
    return images.map(image=> <Item key={nanoid()}> <Image src={image.webformatURL} alt={image.tags}/> </Item>)}
