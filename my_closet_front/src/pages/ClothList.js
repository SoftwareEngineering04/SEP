import { useEffect, useState } from "react";
import Header from "../components/Header";
import BottomMenu from "../components/BottomMenu";
import {useLocation } from "react-router-dom";
import ParentCategory from "../components/ParentCategory";
import Button from "../components/Button";
import axios from "axios";
import { useSelector } from "react-redux";
import ClothInfo from "../components/ClothInfo";

const ClothList = () => {
  const [clothList, setClothList] = useState([]);
  const location = useLocation();

  const [firstCategory, setFirstCategory] = useState();
  const [secondCategory, setSecondCategory] = useState('전체');
  const [season, setSeason] = useState();
  const userId = useSelector((state) => state.id);

  useEffect(() => {
    setFirstCategory(location.state.category);
    setSeason(location.state.season); 
  },[]);

  const show = () => {
    const cloth = axios.create({
      baseURL: 'http://localhost:8000/'
    })
    cloth.post('/clothes/byCategory', null,{params: {
        category: firstCategory.toString(), 
        subcategory: secondCategory.toString(), 
        filter:season.toString(), id:userId
      }}).then(function (response){
      console.log(response.data);
      setClothList(response.data);
    }).catch(function (error){
      console.log(`에러 발생 : ${error}`);
    })
  }

  return(
    <>
    <Header />
    <div style={{textAlign:'center'}}>
      <div style={{margin:'10px auto'}}>
        <ParentCategory category={firstCategory} season={season} disabled={true}
        setFirstCategory={setFirstCategory} setSecondCategory={setSecondCategory}/>
        <div style={{display:'block', margin:'0 auto'}}>
          {season && season.map((val) => (
            <Button value={val} backgroundColor='skyblue'
            margin={'5px 5px 0 0'} width={'50px'} height={'30px'} cursor={'default'}/>
          ))}
        </div>
      </div>
    <div>
      <p>{'하위 카테고리까지 선택 후 검색을 눌러주세요'}</p>
      <Button onClick={show} value={'검색'} width={'200px'} height={'30px'}/>
    </div>
        {/*옷 보여주자*/}
      <div style={{width:'450px', textAlign:'center',
      margin:'5px auto 60px'}}>
        {clothList && clothList.map((obj) => (
          <div style={{display:'inline-block', margin:'5px 7px'}}>
            <ClothInfo key={obj.name} name={obj.name} photo={obj.photo}
            category={obj.category} subcategory={obj.subcategory} 
            cid={obj.cid} favorite={obj.favorite}/>
          </div>
        ))}
      </div>
    </div>
    <BottomMenu />
    </>
  );
}

export default ClothList;