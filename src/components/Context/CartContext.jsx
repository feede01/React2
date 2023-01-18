import React, {createContext, useState} from 'react'

export const CartContext = createContext()

const CartProvider = ({children}) => {

    const [cart, setCart] = useState([]);
    console.log(cart)

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

    const clearCart = () => {
        setCart([])
    }

    const removeItem = (idToRemove) => {
        let newCart = cart.filter(itemInCart=>(itemInCart.id !== idToRemove))
        setCart(newCart);
    }

    const totalPrice = () => {
        return cart.reduce((prev, act) => prev + act.count * act.price, 0);
    };

    const totalItemCount = () => {
        let total = 0;
        cart.forEach(itemInCart=>{
            total = total + itemInCart.count
        })
        return total;
    }


    return (
        <>
            <CartContext.Provider value={{cart, addToCart, clearCart, removeItem, totalPrice, totalItemCount}}>
                {children}
            </CartContext.Provider>
        </>
    )
}

export default CartProvider