import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { cartContext } from "../Context/cartContext";
import ItemCount from "./ItemCount";
import "./item.css"
import { Link } from "react-router-dom";

const ItemDetail = ({producto}) => {
    const {addToCart} = useContext(cartContext);
    const [countInCart, setCountIsInCart] = useState(0)
    const handleAddToCart = (count) =>{
        addToCart(producto, count);
        setCountIsInCart(count);
    };

    let stylePrice = {
        color: producto.discount? "green" : "black"
    }

    return (
        <>  
        <div style = {{display: "flex"}}>
        <div className="card">
            <div className="card-img">
                <img 
                    src={producto.img} 
                    alt={producto.nombre} 
                    style={{ width: '100%', height: 'auto' }} 
                />
            </div>
            <div className="card-detail">
                <h2>{producto.nombre}</h2>
                <h4>${producto.price} {producto.discount && <small style={stylePrice}>{producto.discount}% OFF</small>}</h4>
                <p>{producto.description}</p>
            </div>
        </div>
       {
            countInCart ? <Link to="/cart">Ir al carrito</Link> : <ItemCount stock={producto.stock} onAddToCart={handleAddToCart}/>
       }
        </div>         
        </>    
    )
};

export default ItemDetail;