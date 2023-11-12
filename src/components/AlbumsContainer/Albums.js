import React, {useEffect, useState} from 'react';
import {Album} from "./Album";
import {todoService} from "../../services/todoService";
import {albumService} from "../../services/albumService";

const Albums = () => {
    const [albums, setAlbums] = useState([]);
    useEffect(()=>{
        albumService.getAll().then(({data})=>setAlbums(data))
    })
    return (
        <div>
            {albums.map(album=><Album key={album.id} album={album}/>)}
        </div>
    );
};

export {Albums};