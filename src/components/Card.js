import React from 'react';


const Card = ({name,email,id}) => {
    return(
        <div className='tc dib br3 pa3 ma2 grow bw2 shadow-5 bg-light-blue'>
            <img src={`https://robohash.org/${id}?set=set4`} alt="cats_img" height ="150px" width="150px"/>
            <h2 >{name}</h2>
            <p>{email}</p>
        </div>
    );
}
export default Card;
