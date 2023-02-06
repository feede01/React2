import React, {useContext} from 'react'
import { cartContext } from '../Context/cartContext'
import '../Button/button.css'

function CartWidget(){
    const valueContext = useContext(cartContext);
    const condicion = valueContext.totalItemsInCart > 0;
    return (
        <div>
            <span>🛒</span>
            {condicion ? <span>{valueContext.totalItemsInCart()}</span> : <></>} 
        </div>
    )
}

export default CartWidget