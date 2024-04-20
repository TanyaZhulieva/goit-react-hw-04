import ImageCard from "../ImageCard/ImageCard.jsx";

export default function ImageGallery({ items }) {
  return (
    <ul>
      {items.map((item) => {
        return (
          <li key={item.id}>
            <ImageCard src={item.urls.small} alt={item.alt_description} />
          </li>
        );
      })}
    </ul>
  );
}
