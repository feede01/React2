import React, {useState} from 'react'
import ItemList from "./ItemList";
import { getItems, getItemsDescription } from '../../services/firebase';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Loader from '../Loader/Loader';

function ItemListContainer(){
    
    const [productos, setProductos] = useState([]);
    const {descripcionId} = useParams();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() =>{
        if (descripcionId === undefined){
            getItems().then ((respuesta) => {setProductos(respuesta);
            setIsLoading(false);
        })

        }
        else {
            getItemsDescription(descripcionId)
            .then ( (respuestaFiltrada) => setProductos (respuestaFiltrada))
            setIsLoading(false);
        }
    }, [descripcionId]);

    if (isLoading){
        return <Loader/>
    }

    return (
        <div>
            <ItemList productos={productos}/>
        </div>
    )
}

export default ItemListContainer