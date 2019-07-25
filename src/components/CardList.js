import React from 'react';
import Card from './Card';


const CardList = ({manycats}) =>{
    const cardListArry =manycats.map((user,index)=>{
        return(
            <Card
            key ={index}
            id = {manycats[index].id}
            name = {manycats[index].name}
            email = {manycats[index].email}
            />
        );
    });
    return(
        <div>
            {cardListArry}
        </div>
    );
}
export default CardList;