import React from "react";
import { Link } from "react-router-dom";

const ItemProy = ({producto}) => {
    return (
    <>
    <div>{producto.nombre}</div>
    <Link to={`/item/${producto.id}`} className =""> 
        <button>Ver detalles</button>
    </Link>
    </>)
};

export default ItemProy;