import React, {useEffect, useState} from 'react';
import axios from 'axios';

const PostTest = () => {
    const [test, setTest] = useState('');


    const login = axios.create({
        baseURL: 'http://localhost:8000/'
    })
    login.post('/api/login', null,{params: {
            id: "lewyine", password: "wldnjs790"
        }}).then(function (response){
        console.log(response.data);
    }).catch(function (error){
        console.log(error);
    })


    return(
        <div>
            개가튼거dee{test}
        </div>
    )
}

export default PostTest;