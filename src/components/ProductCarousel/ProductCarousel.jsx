import { useEffect,useState } from "react";
import styles from "./ProductCarousel.module.css";
import ImageCard from "../ImageCard/ImageCard";
const ProductCarousel = ()=>{
    const [products,setProducts] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        fetch('https://fakestoreapi.com/products?limit=10')
            .then(res=>res.json())
            .then(products => setProducts(products))
            .finally(()=> setLoading(false));
    },[]);

    if(loading) return "loading";

    return <><div className={styles.container}>
        <div className={styles.card_wrapper}>
           {products.map((element,index)=>{return <ImageCard url={element.image} key={index}/>})}
           {products.map((element,index)=>{return <ImageCard url={element.image} key={index}/>})}
        </div>
        </div></>
};

export default ProductCarousel;