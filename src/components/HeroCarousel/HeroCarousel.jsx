import styles from "./HeroCarousel.module.css";
const HeroCarousel = ()=>{
    return <><div className={styles.container}>
        <div className={styles.image_wrapper}>
            <img className={styles.image}src="/images/hero_1.jpg" alt="" />
            <img className={styles.image}src="/images/hero_2.jpg" alt="" />
            <img className={styles.image}src="/images/hero_3.jpg" alt="" />
            <img className={styles.image}src="/images/hero_4.jpg" alt="" />
            <img className={styles.image}src="/images/hero_5.jpg" alt="" />
            <img className={styles.image}src="/images/hero_1.jpg" alt="" />
            <img className={styles.image}src="/images/hero_2.jpg" alt="" />
            <img className={styles.image}src="/images/hero_3.jpg" alt="" />
            <img className={styles.image}src="/images/hero_4.jpg" alt="" />
            <img className={styles.image}src="/images/hero_5.jpg" alt="" />
        </div>

       
        </div></>
};

export default HeroCarousel;