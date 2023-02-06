import React, { useContext } from "react";
import { createBuyOrder } from "../../services/firebase";
import { cartContext } from "../Context/cartContext";
import swal from "sweetalert";
import "./cart.css"
import CheckoutCart from "./CheckoutCart";

const CartViewer = () => {

    const {cart, totalPrice, totalItemInCart, removeItem, clearCart } = useContext(cartContext);

    function handleCheckout(buyerData){
        const order = {
            buyer: buyerData,
            items: cart,
            price: totalPrice(),
            date: new Date()
        }
        createBuyOrder(order).then(id => {
            clearCart();
            swal(
                "Gracias por tu compra",
                `Se realizó la compra correctamente, tu número de ticket con el cuál podrás seguir el pedido es: ${id}`,
                "success"
            );
        });
        
    }

    return <div>
        <h1>Artículos en el carrito</h1>
        

        <table className="cartTable">
            <thead className="cartTable_head">
                <tr className="cartTable_row">
                    <th>Quitar</th>
                    <th>Componente/Gama</th>
                    <th>Descripcion</th>
                    <th>Importe</th>
                    <th>Cantidad</th>
                </tr>
            </thead>
            <tbody>
                {
                    cart.map(item =>{
                        return(
                            <tr key={item.id} className="cartTable_row">
                                <td><button onClick={() => removeItem(item.id)}>X</button></td>
                                <td>{item.descripcion}</td>
                                <td>{item.nombre}</td>
                                <td>{item.price}</td>
                                <td>{item.count}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
        <h4>Precio total: {totalPrice()}</h4>
        <h4>Total de artículos: {totalItemInCart()}</h4>
        <CheckoutCart onCheckout={handleCheckout}/>
        
      
    </div>;
}

export default CartViewer;