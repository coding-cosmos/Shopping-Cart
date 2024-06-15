import { useEffect, useState } from "react";

const useProductData = ()=>{
    const [productData,setProductData] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        fetch('https://fakestoreapi.com/products?limit=10')
            .then((res)=>{
                if(res.status>= 400){
                    throw new Error("server error");
                }
               return res.json()
            })
            .then(productData => setProductData(productData))
            .catch((error)=>setError(error))
            .finally(()=> setLoading(false));
    },[]);

    return {productData,error,loading};
};

export default useProductData;