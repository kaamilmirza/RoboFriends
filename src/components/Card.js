import React from 'react';

const Card = ({name, email, id}) =>{
    return (
        <div class = 'tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            
            <div>
                <img src = {`https://robohash.org/${id}?200x200`} />
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}
export default Card;
 
