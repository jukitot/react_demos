import React from 'react';

import {Outlet} from "react-router-dom";
import {Albums} from '../components/AlbumsContainer/Albums'

const AlbumsPage = () => {
    return (
        <div>
            <Albums/>
            <Outlet/>
        </div>
    );
};

export {AlbumsPage};