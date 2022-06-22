import Header from "../components/Header";
import Button from "../components/Button";
import {useLocation, useNavigate} from 'react-router-dom';
import DeleteCloth from "../components/DeleteCloth";
import axios from "axios";
import { useState, useEffect } from "react";

const AboutCloth = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const {cid} = location.state;

  const [clothInfo, setClothInfo] = useState({});

  const getClothInfo = () => {
    const s = axios.create({
      baseURL: 'http://localhost:8000/'
    })
    s.post('/clothes/bycId', null,{params: {
        cId:parseInt(cid),
      }}).then(function (response){
        console.log(response.data);
        setClothInfo(response.data);
    }).catch(function (error){
      console.log(`에러 발생 : ${error}`);
    })
  }

  useEffect(() => {
    getClothInfo();
  },[])

  return(
    <>
    <Header />
    <div style={{
      display:'block', margin:'0px auto', textAlign:'center'
    }}>

    <p>{'의류 상세 정보'}</p>

    <img alt={'의류 이미지'} src={clothInfo.photo} 
    style={{width:'150px', height:'150px'}}/>

    <p>이름 | {clothInfo.name}</p>
    <p>카테고리 | {clothInfo.category} - {clothInfo.subcategory}</p>
    <p>계절 | {clothInfo.filter}</p>
    <p>즐겨찾기 | {clothInfo.favorite? '★' : '☆'}</p>

    <Button value={'확인'} width={'200px'} height={'25px'}
    onClick={() => navigate(-1)}/>
    <hr style={{border:'none'}}></hr>

    <Button value={'수정하기 '} width={'200px'} height={'25px'}
    onClick={() => navigate('/changecloth', {
      state: {url:clothInfo.photo, name:clothInfo.name, 
        category:clothInfo.category,
        subcategory:clothInfo.subcategory,
        filter:clothInfo.filter,
        favorite:clothInfo.favorite,
        cid:clothInfo.cid,
    }})} />

    <DeleteCloth value={'삭제하기'} cid={cid}/>
    </div>
    </>
  );
}

export default AboutCloth;