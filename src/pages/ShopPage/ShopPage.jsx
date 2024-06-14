import { Outlet } from "react-router-dom";
import Nav from "../../components/Nav/Nav";


const ShopPage = ()=>{
    return <><Nav/>
    <Outlet/>
    </>
};

export default ShopPage;
