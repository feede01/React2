import React, {useState} from 'react'
import ItemList from "./ItemList";
import { data } from '../../data/data';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

function ItemListContainer(props){
    const [productos, setProductos] = useState([]);
    const {descripcionId} = useParams()

    const promesa = new Promise((resolve, reject) => {

        setTimeout(() => {
            resolve(data)
        }, 2000);
    });
    useEffect(() =>{
        if (descripcionId === undefined){
            promesa.then(setProductos(data));
        }
        else {
            promesa.then(setProductos(data.filter(item=> item.descripcion === descripcionId)));
        }

        
    }, [descripcionId]);

    
    return (
        <div>
            <ItemList productos={productos}/>
        </div>
    )
}

export default ItemListContainer