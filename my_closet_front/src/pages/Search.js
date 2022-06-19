import { useState } from "react";
import BottomMenu from "../components/BottomMenu";
import Button from "../components/Button";
import Header from "../components/Header";
import Input from "../components/Input";

const Search = () => {
  const [searchValue, setSearchValue] = useState('');
  const handleValue = (e) => setSearchValue(e.target.value);
  const showClothes = () => {
    //searchValue를 이용해서 get 방식으로 가져와야함
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