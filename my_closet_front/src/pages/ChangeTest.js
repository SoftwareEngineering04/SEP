import FavorateButton from "../components/FavorateButton";
import Header from "../components/Header";
import ParentCategory from "../components/ParentCategory";
import SeasonButton from "../components/SeasonButton";
import { useState } from "react";
import Input from "../components/Input";
import Button from "../components/Button";

const ChangeTest = () => {
  const [firstCategory, setFirstCategory] = useState('');
  const [secondCategory, setSecondCategory] = useState('');
  const [season, setSeason] = useState([]);
  const [name, setName] = useState('');
  const [favorite, setFavorite] = useState(false);

  const handleName = (e) => setName(e.target.value);

  const show = () => {
    console.log(firstCategory);
    console.log(secondCategory);
    console.log(season);
    console.log(name);
    console.log(favorite);
  }

  return(
  <>
  <Header />

  <ParentCategory setFirstCategory={setFirstCategory}
  setSecondCategory={setSecondCategory}/>

  <SeasonButton width={'70px'} height={'30px'} margin={'5px auto'}
    season={season} setSeason={setSeason}/>

  <FavorateButton setFavorite={setFavorite}/>

  <Input type="text" placeholder={'이름을 입력해주세요'}
    display={'block'} margin={'8px auto'} onChange={handleName}/>

  <Button value={'출력'} height={'30px'}
  onClick={show}/>
  </>
  );
}

export default ChangeTest;