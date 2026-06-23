import { useEffect } from "react";
import { useUserStore } from "@store/userStore";
import { useProductsStore } from "@store/productsStore";


export const useOwnProducts = ()=> {
    const user = useUserStore(state => state.user);
    const productos = useProductsStore(state => state.productos);
    const getOwnProducts = useProductsStore(state => state.getOwnProducts);

    useEffect(() => {
        if(user && productos.length > 0){
            getOwnProducts(user.uid);
        }
    }, [user, productos]);
}