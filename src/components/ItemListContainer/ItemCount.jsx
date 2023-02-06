import React, { useState } from "react";
import Button from "../Button/Button";

const ItemCount = ({stock, onAddToCart}) => {
    const [count, setCount] = useState(1);

    const agregar = () => {
        if (count < stock){
            setCount(count+1);
        }
    }

    const restar = () => {
        if (count > 1){
            setCount (count-1);
        }
    };
    return (

        <div className="itemcount_container">
            <div className="itemcount_control">
                <Button onButtonTouch={restar}>
                    -
                </Button>
                <span>{count}</span>
                <Button onButtonTouch={agregar}>
                    +
                </Button>
            </div>
            <div className="itemcount_btns">
                <Button onButtonTouch={()=>onAddToCart(count)}>
                    Agregar al 🛒
                </Button>
            </div>
        </div>
    );
}

export default ItemCount;