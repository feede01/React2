import React, {createContext, useState} from 'react'

const cartContext = createContext ({ cart: []});

const Provider = cartContext.Provider;


function CartContextProvider(props){
    let [cart, setCart] = useState([]);
    
    const isInCart = (id) => cart.find((item)=> item.id === id)? true : false;

    const addToCart = (item, count) => {
        if (isInCart(item.id)){
            setCart(cart.map((producto)=>{
                return producto.id === item.id ? { ...producto, count: (producto.count += count)} : producto
            }))
        } else {
            setCart([...cart, { ...item, count}])
        }
    }

    const totalItemInCart = () => {
        let total = 0;
        cart.forEach(itemInCart=>{
            total = total + itemInCart.count
        })
        return total;
    }

    const removeItem = (idToRemove) => {
        let newCart = cart.filter(itemInCart=>(itemInCart.id !== idToRemove))
        setCart(newCart);
    }

    const clearCart = () => {
        setCart([])
    }

    const totalPrice = () => {
        return cart.reduce((prev, act) => prev + act.count * act.price, 0);
    };

    return (
        <Provider value = {{cart, addToCart, totalItemInCart, removeItem, clearCart, totalPrice}}>
            {props.children}
        </Provider>
    )
}

export {cartContext, CartContextProvider};