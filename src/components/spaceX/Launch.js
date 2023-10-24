import React from 'react';

const Launch = ({item}) => {

    return (
        <div>
            {item.mission_name}
            <br/>
            {item.launch_year}
            <br/>

                <img src={item.links.mission_patch_small} alt=""/>
<hr/>


        </div>
    );
};

export default Launch;