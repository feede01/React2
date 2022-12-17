import React from "react";

const ItemDetail = ({producto}) => {
    return (
        <>
            <div>{producto.img}</div>
            <div>{producto.nombre}</div>
            <div>{producto.descripcion}</div>
            <div>$ {producto.precio}</div>
        </>
    )
};

export default ItemDetail;