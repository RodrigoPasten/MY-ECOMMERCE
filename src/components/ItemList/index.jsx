import Item from '../Item';
import React from 'react';

const ItemList = ({data=[]}) => {
    return (
        data.map(camisetas => <Item key={camisetas.id} info={camisetas}/>)
    );
}

export default ItemList;