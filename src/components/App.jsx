import { useEffect, useState } from "react";
import { fetchImages } from "../images-api.js";
import ImageGallery from "./ImageGallery/ImageGallery.jsx";
import SearchBar from "./SearchBar/SearchBar.jsx";

export default function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  // useEffect(() => {
  //   async function getImages() {
  //     try {
  //       setIsLoading(true);
  //       const data = await fetchImages();
  //       setImages(data);
  //     } catch {
  //       setError(true);
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   }

  //   getImages();
  // }, []);

  const handleSearch = async (searchQuery) => {
    try{
      setIsLoading(true)
      const data = await fetchImages(searchQuery);
      setImages(data);
    } catch{
      setError(true)
    } finally{
      setIsLoading(false)
    }
  };

  return (
    <>
      <SearchBar onSearch={handleSearch} />
      {error && <b>Error!</b>}

      {images.length > 0 && <ImageGallery items={images} />}

      {isLoading && <b>Please wait</b>}
    </>
  );
}
