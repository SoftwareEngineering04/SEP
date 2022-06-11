import Button from "../components/Button";
import Header from "../components/Header";
import Input from "../components/Input";
import BottomMenu from "../components/BottomMenu";
import Weather from "../components/Weather";
import {useState} from 'react'
import { Link } from "react-router-dom";

const Main = () => {
  const [category, setCategory] = useState([]);
  const [season, setSeason] = useState([]);
  return (
    <>
      <Header />
      <Weather />
      <Button width={'200px'} value={'종류별'} 
      display={'block'} margin={'10px auto'}/>
      <Button width={'200px'} value={'계절별'}
      display={'block'} margin={'10px auto'} />
      <div style={{
        textAlign:'center'
      }}>
        <div style={{display:'block', margin:'10px auto'}}>
      <label htmlFor="category">종류별 </label>
      <Input type={'text'}
      defaultValue={category} /></div>
        <div style={{display:'block', margin:'10px auto'}}>
      <label htmlFor="season">계절별 </label>
      <Input type={'text'}
      defaultValue={season} /></div>
      <Link to='/clothlist'>
      <Button value={'검색'} width={'100px'} height={'25px'}/></Link>
      </div>
      <BottomMenu />
    </>
  );
}

export default Main;