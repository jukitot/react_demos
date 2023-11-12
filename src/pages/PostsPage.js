import React from 'react';
import {useLocation} from "react-router-dom";
import {Posts} from "../components/PostsContainer/Posts";

const PostsPage = () => {


    return (
        <div>
            <Posts/>

        </div>
    );
};

export {PostsPage};