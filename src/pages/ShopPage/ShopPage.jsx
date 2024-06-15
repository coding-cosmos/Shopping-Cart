import { Outlet } from "react-router-dom";
import Nav from "../../components/Nav/Nav";
import styles from "./ShopPage.module.css";
import ProductSection from "../../components/ProductSection/ProductSection";

const ShopPage = () => {
  return (
    <>
      <Nav />
      <div className={styles.main__wrapper}>
        <div className={styles.main__content}>
          <section className={styles.products}>
            <h1 className={styles.heading}>Explore</h1>
            <div className={styles.cards_wrapper}>
              <ProductSection />
            </div>
          </section>
        </div>
        <Outlet />
      </div>
    </>
  );
};

export default ShopPage;
