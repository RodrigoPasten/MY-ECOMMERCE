import ItemCount from "../ItemCount";
import React, {useState, useEffect} from "react";
import Title from '../Title';
import ItemList from "../ItemList";

const camisetas = [
    { id:1, image:'https://redgol.cl/_next/image?url=https%3A%2F%2Fredgol.cl%2F__export%2F1657315181262%2Fsites%2Fredgol%2Fimg%2F2022%2F07%2F08%2F_w2a1456_2_crop1657315172716.jpg_1546398727.jpg&w=1080&q=75',
title:"Camiseta selección Chilena"},
    {id:2, image:'https://www.o2sportsoutlet.cl/o2old/41159-large_default/camiseta-local-colombia-2020-adidas.jpg',
title:"Camiseta selección Colombia"},
    {id:3, image:'https://www.o2sportsoutlet.cl/o2old/36781-large_default/camiseta-segunda-equipacion-de-rugby-all-blacks-adidas.jpg',
title:"otros" },

];


export const ItemListContainer = ({text}) => {
    const [data, setData] = useState([]);

useEffect(() =>{
    const getData = new Promise(resolve => {
        setTimeout(() =>{
            resolve(camisetas);
        }, 3000);
    });
    getData.then(res => setData(res));
},[])

    const onAdd = (quantity) => {
        console.log(`Haz agregado ${quantity} unidades`);
    }


    return(
        <>
            <Title greeting={text} />
            <ItemCount initial ={1} stock={10} onAdd={onAdd} />
            <ItemList data={data}/>
        </>
    );
}

export default ItemListContainer;