import Button from "../components/Button";
import Header from "../components/Header";
import Input from "../components/Input";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from 'axios';

const ChangeCloth = () => {
  const naviagte = useNavigate();
  const goBack = () => naviagte(-1);

  const location = useLocation();

  const [newName, setNewName] = useState();
  const [newCategory, setNewCategory] = useState();
  const [newSubCategory, setNewSubCategory] = useState();
  

  const url = location.state.url;
  const name = location.state.name;
  const category = location.state.category;
  const subcategory = location.state.subcategory;
  const filter = location.state.filter;
  const favorite = location.state.favorite;

  
  const changeClothInfo = () => {
    const cloth = axios.create({
      baseURL: 'http://localhost:8000/'
    })
    cloth.post('/clothes/update', null,{params: {
        name : name, favorite:favorite,
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
    <Input type={'text'} placeholder={'새 이름을 입력해주세요'} 
    margin={'20px auto'}/>

    <hr style={{border:'none'}}></hr>
    <p>{`카테고리 : ${category} - ${subcategory}`}</p>

    <hr style={{border:'none'}}></hr>
    <p>{`계절 : ${filter}`}</p>

    <hr style={{border:'none'}}></hr>
    <Button value={'변경내용 저장하기'} width={'100px'} 
    height={'30px'} margin={'0 5px 0 0'}
    onClick={changeClothInfo}/>

    
    <Button value={'취소'} width={'50px'} height={'30px'}
    onClick={goBack}/>
    </div>
    </>
  );
}

export default ChangeCloth;