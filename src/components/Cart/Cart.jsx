import React, { useContext } from "react";
import { CartContext } from "../Context/CartContext";

const Cart = () => {

    const {cart, totalPrice, totalItemCount } = useContext(CartContext);

    return (
        <div>
            {cart.map((item) =>{
                <>
                    <h1>{item.price}</h1>
                    <h1>{totalPrice()}</h1>
                    <h1>{totalItemCount()}</h1>
                </>
            })}
        </div>
    )

}

export default Cart;