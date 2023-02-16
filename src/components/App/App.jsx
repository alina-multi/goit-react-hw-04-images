import {useState, useEffect} from "react";
import {Searchbar} from "../Searchbar/Searchbar";
import { fetchImages } from "api/api";  
import { Section } from "./App.styled";
import { Loader } from "components/Loader/Loader";
import { LoadMore } from "components/Button/Button";
import { ImageGallery } from "components/ImageGallery/ImageGallery";
import {ImageGalleryItem } from "../ImageGalleryItem/ImageGalleryItem"
import { Modal } from "components/Modal/Modal";

export const App = () => {
  const [searchValue, setSearchValue] = useState("");
  const [currentImages, setCurrentImages] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [largeImage, setLargeImage] = useState("");

  const onSearch = (e) => {
    e.preventDefault();
    let value = e.currentTarget.elements.input.value;
    if(searchValue !== value ) {
      setPage(1);
      setSearchValue(value)
    }

    if(isModalOpen){
      toggleModal();
    }
  }

  useEffect(() => {
    const getImages = async () => {
      try {
        setIsLoading(true)
        const images = await fetchImages(searchValue, page);
        setCurrentImages(images)
      } catch {}
      setIsLoading(false)
    }
    getImages()
  }, [searchValue, page])

  const onLoadMoreClick = () =>{
    increasePage();
  }

  const increasePage=()=>{
    setPage(page => page + 1)
  }

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  }

  const onImageClick = (e) => {
   if(e.currentTarget === e.target) {
  return;} 
     toggleModal();   
      const currentImageUrl = e.target.src;
      const currentImage = currentImages.find(image => image.webformatURL === currentImageUrl)
      setLargeImage(currentImage)
}


  return <Section>
    <Searchbar onSearch={onSearch}/>
    {isLoading ?
    <Loader/> 
    : 
    <ImageGallery onClick={onImageClick}> 
    <ImageGalleryItem images={currentImages} /> 
    </ImageGallery>
    }
    {(currentImages.length > 11 && !isLoading) 
    &&
    <LoadMore onLoadMoreClick={onLoadMoreClick}/>}
    { isModalOpen && <Modal image={largeImage}  
    currentImages={currentImages}
    onClose={toggleModal}/>}
  </Section>
}




