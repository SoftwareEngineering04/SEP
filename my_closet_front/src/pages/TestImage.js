import axios from "axios"
import { useEffect, useState } from "react";

const TestImage = () => {
  const [name, setName] = useState('');
  const [url, setUrl] = useState('');

  const handleName = (e) => setName(e.target.value);

  const getImage = () => { 
    const image = axios.create({
      baseURL: 'http://localhost:8000/'
    })
    image.post('/api/fileprint', null,{params: {
        name : name
      }}).then(function (response){
      console.log(response.data);
      setUrl(response.data);
    }).catch(function (error){
      console.log(`에러 발생 : ${error}`);
    })
  }

  return(
    <>
      <input type='text' onChange={handleName}></input>
      <button onClick={getImage}>이미지 가져오기</button>
      <img style={{width:'200px', height:'200px'}}
      src={url} alt={'이미지'} ></img>
    </>
  );
}

export default TestImage;