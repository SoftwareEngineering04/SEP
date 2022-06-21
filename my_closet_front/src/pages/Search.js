import { useState } from "react";
import BottomMenu from "../components/BottomMenu";
import Button from "../components/Button";
import Header from "../components/Header";
import Input from "../components/Input";
import axios from "axios";

const Search = () => {
  const [searchValue, setSearchValue] = useState('');
  const handleValue = (e) => setSearchValue(e.target.value);

  const showClothes = () => {
    const cloth = axios.create({
      baseURL: 'http://localhost:8000/'
    })
    cloth.post('/api/???', null,{params: {
        name:searchValue,
      }}).then(function (response){
        console.log(response.data);
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

    <p>{'의류 출력해야함...'}</p>
    {/*입력값으로 의류 출력...*/}
    </div>
    <BottomMenu />
    </>
  );
}

export default Search;