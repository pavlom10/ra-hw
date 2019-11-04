import React, {useState, useEffect} from 'react';

import List from './List';
import Details from './Details';

export default function Users(props) {

    const [info, setInfo] = useState({id: null})
    const [details, setDetails] = useState({id: null})
    const [isLoading, setLoading] = useState(false);    

    const handleClick = (info) => {
        // console.log(info);
        setInfo(info);
    }

    useEffect(() => {

        if (info.id == null) {
            return;
        }

        const fetchData = async () => { 
            
            setLoading(true);

            try { 

                const response = await fetch(`${process.env.REACT_APP_API_URL}${info.id}.json`); 
                
                if (!response.ok) {
                    throw new Error(response.statusText); 
                }                
            
                const data = await response.json();
                setDetails(data);

            } catch (e) {
                console.log(e);
            } finally {
                setLoading(false);
            }

        }

        fetchData();        

    }, [info.id]);    


    return (
        <>
            <List onClick={handleClick} />
            {isLoading && <p>Loading...</p>}
            {details.id !== null && <Details info={details} /> }
        </>
    );

}
