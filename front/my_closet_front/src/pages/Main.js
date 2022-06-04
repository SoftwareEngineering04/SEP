import Button from "../components/Button";
import Header from "../components/Header";
import Input from "../components/Input";
import BottomMenu from "../components/BottomMenu";
import {useState} from 'react'

const Main = () => {
  const [category, setCategory] = useState([]);
  const [season, setSeason] = useState([]);
  return (
    <>
      <Header />
      <p>Weather & temp</p>
      <Button width={'200px'} value={'종류별'} />
      <Button width={'200px'} value={'계절별'} />
      <label htmlFor="category">종류별</label>
      <Input type={'text'}
      value={category} />
      <label htmlFor="season">계절별</label>
      <Input type={'text'}
      value={season} />
      <Button value={'찾기'} />
      <BottomMenu />
    </>
  );
}

export default Main;