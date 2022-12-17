import React from 'react'

function ItemListContainer(props){
    const {mensaje} = props;
    return (
        <div>
            <h2>{mensaje}</h2>
        </div>
    )
}

export default ItemListContainer