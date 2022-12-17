import React from "react";
import ItemProy from "./ItemProy";

const ItemList = ({productos}) => {
    return (
    <div>
        {productos.map(producto => (
        <ItemProy producto={producto} key={producto.id}/>
        ))}
    </div>
    );
};

export default ItemList;