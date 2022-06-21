import Button from "../components/Button";
import Header from "../components/Header";
import Input from "../components/Input";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from 'axios';

const ChangeCloth = () => {
  const naviagte = useNavigate();
  const location = useLocation();

  const [name, setName] = useState();
  const [category, setCategoty] = useState([]);
  const [subcategory, setSubcategory] = useState();
  const [filter, setFilter] = useState([]);
  const [url, setUrl] = useState();

  useEffect(() => {
    setName(location.state.name);
    setCategoty(location.state.category);
    setSubcategory(location.state.subcategory);
    setFilter(location.state.filter);
    setUrl(location.state.url);
  },[]);

  const goBack = () => {
    naviagte(-1);
  }
  const changeClothInfo = () => {
    const cloth = axios.create({
      baseURL: 'http://localhost:8000/'
    })
    cloth.post('/clothes/update', null,{params: {
        name : name,
      }}).then(function (response){
      console.log(response.data);
      alert('수정 완료')
    }).catch(function (error){
      console.log(`에러 발생 : ${error}`);
    })
  }
  return(
    <>
    <Header />

    <div style={{textAlign:'center'}}>
    <img alt='img' src={url} />

    <hr style={{border:'none'}}></hr>
    <label>이름</label>
    <Input type={'text'} placeholder={'이름을 입력해주세요'} 
    margin={'20px auto'}/>

    <hr style={{border:'none'}}></hr>
    <p>{`카테고리 : ${category} - ${subcategory}`}</p>

    <hr style={{border:'none'}}></hr>
    <p>{`계절 : ${filter}`}</p>

    <hr style={{border:'none'}}></hr>
    <Button value={'수정하기'} width={'70px'} 
    height={'30px'} margin={'0 5px 0 0'}
    onClick={changeClothInfo}/>

    
    <Button value={'취소'} width={'50px'} height={'30px'}
    onClick={goBack}/>
    </div>
    </>
  );
}

export default ChangeCloth;