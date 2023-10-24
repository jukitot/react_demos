import React, {useState} from 'react';

const Post = ({item, chosePost}) => {


    return (
        <div>
            {item.id}. {item.title}
            <br/>
            <button onClick={()=>{
                chosePost(item);

            }}>Details</button>


            <hr/>

        </div>
    );
};

export default Post;