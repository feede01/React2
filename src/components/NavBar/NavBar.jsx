import React from 'react'
import CartWidget from './CartWidget'
import style from 'styled-components'
import { NavLink } from 'react-router-dom'

function NavBar(){
    return (
        <>
            <NavStyles>
                <NavLink to='/'><h2>TecnologíasCoder</h2></NavLink>
                <NavLink to='/descripcion/Gama baja'>Gama Baja</NavLink>
                <NavLink to='/descripcion/Gama media'>Gama Media</NavLink>
                <NavLink to='/descripcion/Gama alta'>Gama Alta</NavLink>
                <NavLink to='/descripcion/Componentes'>Componentes</NavLink>
                <CartWidget/>
            </NavStyles>
        </>
    )
}

export default NavBar

const NavStyles = style.nav`
    h2{
        color: white;
        font-weigt: 300;
        span{
            font-weight:bold;
        }
    }
    padding: .4rem;
    backgroud-color: #333;
    display: flex;
    align-items: center;
    justify-content: space-between;
    a{
        color: white;
        text-decoration: NamedNodeMap;
        margin-right: 1rem;
    }
    img{
        width: 50px;
        height: 50px
    }
    background-color: blueviolet;
`