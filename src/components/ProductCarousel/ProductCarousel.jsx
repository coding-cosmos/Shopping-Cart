import styles from "./ProductCarousel.module.css";
import ImageCard from "../ImageCard/ImageCard";
import useProductData from "../../scripts/utils";

const ProductCarousel = () => {
  const { productData, error, loading } = useProductData();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>A network error was encountered</p>;

  return (
    <>
      <div className={styles.container}>
        <div className={styles.card_wrapper}>
          {productData.map((element, index) => {
            return <ImageCard url={element.image} key={index} />;
          })}
          {productData.map((element, index) => {
            return <ImageCard url={element.image} key={index} />;
          })}
        </div>
      </div>
    </>
  );
};

export default ProductCarousel;
