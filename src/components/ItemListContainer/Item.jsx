import React from 'react'

function Item(props){
    const {price, title, img, description} = props;
    return (
        <div className="card">
            <button className='card-favicon'>❤asdasd</button>
            <div className="card-img">
                <img src={img} alt="imagen producto"></img>
            </div>
            <div className="card-detail">
                <h2>{title}</h2>
                <h4>$aaa {price}</h4>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default Item