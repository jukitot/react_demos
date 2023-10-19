import React from 'react';

const UserComponent = ({item}) => {
    return (
        <div >
            <h2>{item.id} {item.name}</h2>
            <p>{item.email} {item.surname}</p>
        </div>
    );
};

export default UserComponent;