import React, { useState } from "react";

const ItemCount = ({stock, onAddToCart}) => {
    const [count, setCount] = useState(1);

    const agregar = () => {
        //if (count < stock){
            setCount(count+1);
        //}
    }

    const restar = () => {
        //if (count > 1){
            setCount (count-1);
        //}
    };
    return (
        <div>
            <button onClick={() => agregar()}>+</button>
            <h1>{count}</h1>
            <button onClick={()=> {onAddToCart(count)}}>Agregar al 🛒</button>
            <button onClick={() => restar()}>-</button>
        </div>
    )
}

export default ItemCount;