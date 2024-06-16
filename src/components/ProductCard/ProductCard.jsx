import { useRef, useState } from "react";
import Button from "../Button/Button";
import QuantityCounter from "../QuantityCounter/QuantityCounter";
import WishlistButton from "../WishlistButton/WishlistButton";
import styles from "./ProductCard.module.css";
import PropTypes from "prop-types";
import { addItem } from "../../data/CartData";

const ProductCard = ({ image, title, price }) => {
  const value = useRef();
  const [added, setAdded] = useState(false);
  const [wishlisted, setWishlisted] = useState(false);

  const titleUpdated = title.split(" ").slice(0, 3).join(" ");
  const btn = added ? (
    <Button text="Go To Cart" route="/shop/cart" />
  ) : (
    <Button text="Add To Cart" />
  );

  const handleAddToCart = () => {
    setAdded(true);
    const quantity = value.current.getChildValue();
    const item = {
      title: titleUpdated,
      image: image,
      price: price,
      quantity: quantity,
    };
    addItem(item);
  };

  const handleWishlist = () => {
    wishlisted ? setWishlisted(false) : setWishlisted(true);
    localStorage.setItem(
      "wishlist",
      JSON.stringify({
        title: title,
        image: image,
        price: price,
        wishlisted: wishlisted,
      })
    );
  };

  return (
    <>
      <div className={styles.product_card}>
        <img src={image} alt="" className={styles.image} />
        <div className={styles.btn}>
          <WishlistButton state={wishlisted} onClick={handleWishlist} />
        </div>
        <div className={styles.title}>{titleUpdated}</div>
        <div className={styles.price}>${price}</div>
        <div className={styles.wrapper}>
          <div className={styles.cart_btn} onClick={handleAddToCart}>
            {btn}
          </div>
          <div className={styles.quantity}>
            <QuantityCounter ref={value} />
          </div>
        </div>
      </div>
    </>
  );
};

ProductCard.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  price: PropTypes.number,
};

export default ProductCard;
