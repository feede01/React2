import React, { useState } from 'react'
import InputForm from './InputForm'


function CheckoutCart({ onCheckout }){

    const [buyerData, setBuyerData] = useState({
        name: "",
        email: "",
        phone: "",
        adress: "",
    });

    function handleInputChange(evt){
        let nameInput = evt.target.name;
        let value = evt.target.value;
        const newBuyerData = { ...buyerData };
        newBuyerData[nameInput] = value;
        setBuyerData(newBuyerData)
    }

    function onSubmit(evt){
        evt.preventDefault();
        setBuyerData({
            name: "",
            email: "",
            phone: "",
            adress: "",
        });
        onCheckout(buyerData);
    }

    return(
        <div>
            <h1>Genera tu orden de compra</h1>
            <form>
                <InputForm
                    value={buyerData.name}
                    name="name"
                    title="Nombre y apellido"
                    onChange={handleInputChange}
                />
                <InputForm
                    value={buyerData.email}
                    name="email"
                    title="Email de contacto"
                    onChange={handleInputChange}
                />
                <InputForm
                    value={buyerData.phone}
                    name="phone"
                    title="Número de celular"
                    onChange={handleInputChange}
                />
                <InputForm
                    value={buyerData.adress}
                    name="adress"
                    title="Dirección"
                    onChange={handleInputChange}
                />

                <button style={{flexDirection: 'column', marginBottom: 8, padding: 10, alignItems: 'center'}} onClick={onSubmit}>Realizar pedido</button>
            </form>
        </div>
    );
}
export default CheckoutCart