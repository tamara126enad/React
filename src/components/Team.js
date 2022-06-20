import React from 'react';

const Team= props=>{
    console.log(props);
    return(
            <div className='card'>
                <h1>{props.name}</h1>
                <p>{props.lorem}</p>
                <h1>{props.likes}</h1>
            </div>

    );

};
export default Team;