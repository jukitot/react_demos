import React from 'react';
import {useNavigate} from "react-router-dom";

const User = ({user}) => {
    const {id, name, username, email} = user;
    const navigate = useNavigate();
    return (
        <div>
            <div>ID: {id}</div>
            <div>Name: {name}</div>
            <div>Username: {username}</div>
            <div>Email: {email}</div>
            <button onClick={()=>navigate('posts', {state: id, replace: true})}>Get Posts</button>
            <br/>
        </div>

    );
};

export {User};