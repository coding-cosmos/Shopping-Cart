import { useEffect, useState } from "react";
import { getItems,getTotalCost } from "../../data/CartData";
import ItemCard from "../ItemCard/ItemCard";
import styles from "./Cart.module.css";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const [items, setItems] = useState(getItems());
  const navigate = useNavigate();

  const handleClose = ()=>{
    console.log('closing');
    navigate(-1);
  }

  useEffect(() => {
    const handleStorage = () => {
      setItems(getItems());
    };

    window.addEventListener("storage", handleStorage);

    return () => window.removeEventListener("storage", handleStorage);
  }, []);

  return (
    <>
      <div className={styles.cart}>
        <div className={styles.wrapper}>
          <div className={styles.close} onClick={handleClose}>X</div>
          <div className={styles.heading}>Cart</div>
        </div>
        <div className={styles.items}>
          {items
            ? (items.map((item, index) => {
                return (
                  <ItemCard
                    item={item}
                    key={index}
                  />
                );
              }))
            :("Please Add Product To Cart")}
        </div>
        <div className={styles.receipt}>
            <div className={styles.receipt_field}>
                <div className={styles.total}>Cart Total</div>
                <div className={styles.total}>${getTotalCost()}</div>
            </div>
            <div className={styles.receipt_field}>
                <div className={styles.total}>Tax</div>
                <div className={styles.total}>${Math.round(getTotalCost()*18/100)}</div>
            </div>
            <div className={styles.receipt_total}>
                <div className={styles.sub_total}>Sub Total</div>
                <div className={styles.sub_total}>${Math.round(getTotalCost()*18/100) + getTotalCost()}</div>
            </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
