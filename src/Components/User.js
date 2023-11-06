import React from 'react';
import './Users.css'
const User = ({user}) => {


    let {name} = user;
    return (
        <div className={'asd'}>
            <div>Name: {name}</div>

            <hr/>
        </div>
    );
};

export {User};