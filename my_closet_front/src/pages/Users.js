import React, {useEffect, useState} from 'react';
import axios from 'axios';

const Users = () => {
    const [hello, setHello] = useState('')

    useEffect(() => {
        axios.get('/api/users')
            .then((response) => {
                if(response.data)
                    setHello(response.data);
                else
                    alert("failed to")
            })
            .catch(error => console.log(error))
    }, []);

    return (
        <div>
            <header >
                {hello}
            </header>
        </div>
    );
}

export default Users;