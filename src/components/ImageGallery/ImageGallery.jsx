import {List } from "./ImageGallery.styled"

export const ImageGallery = ({children, onClick}) =>{
    return <List onClick={onClick} >
   {children}
  </List>
}