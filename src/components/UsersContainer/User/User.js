import React from 'react';
import css from './User.module.css';

const User = ({user, click}) => {
    const {id, name} = user;



    return (
        <div className={css.User}>
            <div>ID: {id}</div>
            <div>Name: {name}</div>
            <button onClick={()=>click(id)}>Details</button>

        </div>
    );
};

export {User};