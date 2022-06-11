import Button from "../components/Button";
import Header from "../components/Header";
import Input from "../components/Input";
import BottomMenu from "../components/BottomMenu";
import Weather from "../components/Weather";
import {useState} from 'react'
import { Link } from "react-router-dom";
import CategoryButton from "../components/CategoryButton";
import SeasonButton from "../components/SeasonButton";

const Main = () => {
  const categoryForButton = ['아우터', '상의', '하의', '신발'];
  const seasonForButton = ['봄', '여름', '가을', '겨울'];
  const [category, setCategory] = useState([]);
  const [season, setSeason] = useState([]);

  return (
    <>
      <Header />
      <Weather />
      <CategoryButton width={'55px'} height={'30px'}
      category={category} setCategory={setCategory}/>
      <SeasonButton width={'55px'} height={'30px'} 
      season={season} setSeason={setSeason}/>
      <div style={{textAlign:'center'}}>
      <div style={{display:'block', margin:'10px auto'}}>
      <label htmlFor="category">종류별 </label>
      <Input type={'text'} readOnly={true}
      value={category} /></div>
      <div style={{display:'block', margin:'10px auto'}}>
      <label htmlFor="season">계절별 </label>
      <Input type={'text'} readOnly={true}
      value={season} /></div>
      <Link to='/clothlist'>
      <Button value={'검색'} width={'200px'} height={'25px'} margin={'0 10px'}/></Link>
      </div>
      <BottomMenu />
    </>
  );
}

export default Main;