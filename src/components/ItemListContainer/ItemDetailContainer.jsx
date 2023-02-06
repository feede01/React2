import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSingleItem } from "../../services/firebase";
import Loader from "../Loader/Loader";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState({});
    const { id } = useParams();
    const [isLoading, setIsLoading] = useState(true);

    async function getData() {
        let respuesta = await getSingleItem(id);
        setProducto(respuesta);
        setIsLoading(false);
    }

    useEffect(() => {
        getData();
    }, []);
    
    return (
        <>
            {isLoading ? <Loader/> : <ItemDetail producto={producto}/>}
        </>
    );
};

export default ItemDetailContainer;