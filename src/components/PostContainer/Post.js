import React from 'react';

const Post = ({post}) => {
    const {id, userId, title, body} = post
    return (
        <div>
            <div>Id: {id}</div>
            <div>USer ID: {userId}</div>
            <div>Title: {title}</div>
            <div>Body: {body}</div>

        </div>
    );
};

export {Post};