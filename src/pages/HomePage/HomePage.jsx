import Nav from "../../components/Nav/Nav";
import { Outlet } from "react-router-dom";
import styles from "./HomePage.module.css";
import HeroCarousel from "../../components/HeroCarousel/HeroCarousel";
import ProductCarousel from "../../components/ProductCarousel/ProductCarousel";
import PageLink from "../../components/PageLink/PageLink";

const Home = () => {
  return (
    <div className="home">
      <Nav />
      <div className={styles.main__wrapper}>
        <div className={styles.main__content}>
            <section className={styles.hero}>
                <div className={styles.hero__content}>
                    <h1 className={styles.heading}>Shop the World!!</h1>
                    <PageLink route="shop" name="Shop Now" active={true} className={styles.cta}/>
                </div>
                <HeroCarousel/>
            </section>
            <section className={styles.products}>
                <ProductCarousel/>
            </section>
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default Home;
