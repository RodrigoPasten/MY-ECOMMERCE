import ItemCount from "../ItemCount";
import React from "react";
import Title from '../Title';


export const ItemListContainer = ({text}) => {

    const onAdd = (quantity) => {
        console.log(`Haz agregado ${quantity} unidades`);
    }


    return(
        <>
            <Title greeting={text} />
            <ItemCount initial ={1} stock={10} onAdd={onAdd} />
        </>
    );
}

export default ItemListContainer;