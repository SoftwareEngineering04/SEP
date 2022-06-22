import { useState } from "react";
import BottomMenu from "../components/BottomMenu";
import Button from "../components/Button";
import Header from "../components/Header";
import Input from "../components/Input";
import axios from "axios";
import { useSelector } from "react-redux";
import ClothInfo from "../components/ClothInfo";

const Search = () => {
  const [searchValue, setSearchValue] = useState('');
  const handleValue = (e) => setSearchValue(e.target.value);
  const userId = useSelector((state) => state.id);
  const [clothList, setClothList] = useState([]);

  const showClothes = () => {
    const cloth = axios.create({
      baseURL: 'http://localhost:8000/'
    })
    cloth.post('/clothes/byName', null,{params: {
        name:searchValue, id:userId
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

    <Input type="text" placeholder={'검색어를 입력해주세요'}
    onChange={handleValue}/>

    <Button value={'검색'} margin={'0px 10px'} height={'25px'}
    onClick={showClothes}/>

    </div>
    {/*옷 보여주자*/}
    {clothList && clothList.map((obj) => (
      <ClothInfo key={obj.name} name={obj.name} photo={obj.photo}
      category={obj.category} subcategory={obj.subcategory} 
      cid={obj.cid} favorite={obj.favorite}/>
      ))}
    <div>
    </div>
    <BottomMenu />
    </>
  );
}

export default Search;