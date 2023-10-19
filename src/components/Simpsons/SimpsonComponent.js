import React from 'react';

const SimpsonComponent = ({simpson}) => {
    const {id, name, img} = simpson;
    return (
        <div>
            <div>Id: {id}</div>
            <div>Name {name}</div>
            <img src={img} alt={name}/>

        </div>
    );
};

export default SimpsonComponent;