import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./item.css";

const ItemProy = ({ producto }) => {
    const [isFavorite, setIsFavorite] = useState(false);

    function handleFavorite() {
        setIsFavorite(!isFavorite);
    }

    let stylePrice = {
        color: producto.discount ? "green" : "black"
    };

    return (
        <>
            <div className="card">
                <button 
                    onClick={handleFavorite} 
                    className={isFavorite ? "card-favicon favorite" : "card-favicon"}
                >
                    ❤
                </button>
                <div className="card-img">
                    <img src={producto.img} alt={producto.nombre} />
                </div>
                <div className="card-detail">
                    <h2>{producto.nombre}</h2>
                    <h4>
                        ${producto.price}{" "}
                        {producto.discount && <small style={stylePrice}>{producto.discount}% OFF</small>}
                    </h4>
                    <p>{producto.description}</p>
                </div>
                <Link to={`/item/${producto.id}`} className="">
                    <button>Ver detalles</button>
                </Link>
            </div>
        </>
    );
};

export default ItemProy;
