import { removeItem, updateQuantity } from "../../data/CartData";
import Button from "../Button/Button";
import QuantityCounter from "../QuantityCounter/QuantityCounter";
import styles from "./ItemCard.module.css";
import PropTypes from "prop-types";

const ItemCard = ({ item }) => {
  const handleDelete = () => {
    removeItem(item);
  };

  const handleCounter = (value) => {
    updateQuantity(item, value);
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.image}>
          <img src={item.image} className={styles.img} alt="" />
        </div>
        <div className={styles.details}>
          <div className={styles.name}>{item.title}</div>
          <div className={styles.price}>${item.price}</div>
          <div className={styles.controls}>
            <div className={styles.quantity}>
              <QuantityCounter
                quantity={item.quantity}
                onClick={handleCounter}
              />
            </div>
            <div className={styles.delete}>
              <Button text="Delete" onClick={handleDelete} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

ItemCard.propTypes = {
  item: PropTypes.object,
};

export default ItemCard;
