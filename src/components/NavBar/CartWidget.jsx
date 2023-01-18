import React from 'react'
import { Link } from 'react-router-dom'

function CartWidget(){
    return (
        <>
            <Link to='/cart'><button><img src="https://cdn-icons-png.flaticon.com/512/107/107831.png?w=740&t=st=1669500118~exp=1669500718~hmac=a432367ff1363cbe1a37cb7db010839218e69d322a59f0a0d40c63aa087e7ef9" alt="Carrito Compras" /></button></Link>
        </>
    )
}

export default CartWidget