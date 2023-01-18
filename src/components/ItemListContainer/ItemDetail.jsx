import React from "react";
import { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import ItemCount from "./ItemCount";

const ItemDetail = ({producto}) => {
    const {addToCart, totalPrice, totalItemCount} = useContext(CartContext);

    const handleAddToCart = (count) =>{
        addToCart(producto, count);
    };

    return (
        <>
            <div>{producto.img}</div>
            <div>{producto.nombre}</div>
            <div>{producto.descripcion}</div>
            <div>${producto.price}</div>
            <h1>Precio total: ${totalPrice()}</h1>
            <h1>Items total: {totalItemCount()}</h1>
            <ItemCount onAddToCart={handleAddToCart}/>
            <h1>Para ir al carrito clickear el ícono en la esquina superior derecha</h1>
            
        </>
    )
};

export default ItemDetail;