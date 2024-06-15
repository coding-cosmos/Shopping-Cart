import styles from "./ProductSection.module.css";
import useProductData from "../../scripts/utils";
import ProductCard from "../ProductCard/ProductCard";

const ProductSection = () => {
  const { productData, error, loading } = useProductData();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>A network error was encountered</p>;

  return (
    <>
      <div className={styles.cards}>
        {productData.map((product, index) => {
          return (
            <ProductCard
              image={product.image}
              title={product.title}
              price={product.price}
              key={index}
            />
          );
        })}
      </div>
    </>
  );
};

export default ProductSection;
