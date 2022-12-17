import React from 'react'
import CartWidget from './CartWidget'
import style from 'styled-components'

function NavBar(){
    return (
        <>
            <NavStyles>
                <h2>TecnologíasCoder</h2>
                <ul>
                    <a href="#">Gama Baja</a>
                    <a href="#">Gama Media</a>
                    <a href="#">Gama Alta</a>
                    <a href="#"><CartWidget/></a>
                </ul>
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