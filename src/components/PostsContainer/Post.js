import React, {useEffect} from 'react';
import {postService} from "../../services/postService";

const Post = ({post}) => {
    const {id, userId, title, body} = post


    return (
        <div>
            <div>ID: {id}</div>
            <div>User ID: {userId}</div>
            <div>Title: {title}</div>
            <div>Body: {body}</div>
            <br/>
        </div>
    );
};

export {Post};