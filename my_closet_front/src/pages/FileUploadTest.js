import { Axios } from "axios";
import { useRef, useState} from "react";

const FileUploadTest = () => {
  const [fd, setFd] = useState();
  const imgRef = useRef();

  const handleFile = (e) => {
    const img = e.target.files[0];
    const formData = new FormData();
    formData.append('img', img);
    setFd(formData);
  }
  
  const sendData = () => {
    const data = Axios.create({
        baseURL: 'http://localhost:8000/'
    })
    data.post('/api/fileupload', fd)
        .then(function (response){
        console.log(response.data);
    }).catch(function (error){
        console.log(error);
    })
}
  return(
    <>
    <input type='file' id='file'
    onChange={handleFile} 
    multiple='multiple' ref={imgRef}/>
    <button onClick={sendData}>전송</button>
    </>
  );
}

export default FileUploadTest;