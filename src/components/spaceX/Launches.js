import React, {useEffect, useState} from 'react';
import {getAllLaunches} from "../../services/launch.api.service";
import Launch from "./Launch";

const Launches = () => {
    const [launches, setLaunches] = useState([]);

    useEffect(()=>{
        getAllLaunches()
            .then( value => {
                const filtered = value.data.filter(item => item.launch_year !== '2020');
                setLaunches(filtered);
            })
    },[]);



    return (
        <div>
            {
                launches.map(value => <Launch item={value} key={value.flight_number}/>)
            }
        </div>
    );
};

export default Launches;