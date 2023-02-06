import React from "react";
import ItemProy from "./ItemProy";
import Flex from "../Flex/Flex";

const ItemList = ({productos}) => {
    return (
    <div>
        <Flex>
        {productos.map(producto => (
        <ItemProy producto={producto} key={producto.id}/>
        ))}
        </Flex>
    </div>
    );
};

export default ItemList;