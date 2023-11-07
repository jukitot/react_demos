import React from 'react';

const UserDetails = ({userDetails}) => {
    const {id, name, username, email} = userDetails;
    return (
        <div>
            <div>ID:{id}</div>
            <div>Name:{name}</div>
            <div>Username:{username}</div>
            <div>Email:{email}</div>

        </div>
    );
};

export {UserDetails};