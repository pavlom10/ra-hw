import React, {useEffect, useState} from 'react';

export default function List(props) {

    const [users, setUsers] = useState([]);
    const {onClick} = props;

    useEffect(() => {

        const fetchNews = async () => { 
            
            // console.log(process.env.REACT_APP_API_URL + 'users.json');

            try { 

                  const response = await fetch(`${process.env.REACT_APP_API_URL}users.json`); 
                  
                  if (!response.ok) {
                      throw new Error(response.statusText); 
                  }                
                
                  const data = await response.json();
                  setUsers(data);

                  console.log('listing uploaded');

              } catch (e) {
                  console.log(e);
              }

            }

        fetchNews();        

    }, []);    

    return (
        <ul>
          {users.map(item => 
              <li key={item.id} onClick={() => onClick(item)}> 
                {item.name}
              </li>)
          }
        </ul>
    );

}

