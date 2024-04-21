import { useEffect, useState } from "react";
import { fetchImages } from "../images-api.js";
import ImageGallery from "./ImageGallery/ImageGallery.jsx";
import SearchBar from "./SearchBar/SearchBar.jsx";
import LoadMoreBtn from "./LoadMoreBtn/LoadMoreBtn.jsx";

export default function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");

  const handleSearch = async (newQuery) => {
    setQuery(newQuery);
    setPage(1);
    setImages([]);
  };

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  useEffect(() => {
    if (query === "") {
      return;
    }

    async function getImages() {
      try {
        setIsLoading(true);
        const data = await fetchImages(query, page);
        setImages((prevImages) => {
          return [...prevImages, ...data];
        });
      } catch {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }
    getImages();
  }, [query, page]);

  return (
    <>
      <SearchBar onSearch={handleSearch} />
      {error && <b>Error!</b>}

      {images.length > 0 && <ImageGallery items={images} />}

      {isLoading && <b>Please wait</b>}

      {images.length > 0 && !isLoading && <LoadMoreBtn onClick={handleLoadMore} />}
    </>
  );
}
