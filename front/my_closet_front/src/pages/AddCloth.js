import Button from "../components/Button";
import Header from "../components/Header";
import Input from "../components/Input";
import {useState} from 'react';
import { Link } from "react-router-dom";
import BottomMenu from "../components/BottomMenu";
import SeasonButton from "../components/SeasonButton";

const AddColth = () => {
  const onFav = '★'
  const notFav = '☆'
  const [favorite, setFavorite] = useState(notFav);
  const handleFavorite = () => {
    setFavorite(favorite===onFav ? notFav : onFav);
  }
  return(
    <>
    <Header />
    <p>{'의류 추가하기'}</p>
    <Input type='file'
    width={'150px'}
    height={'150px'} />
    <button style={{
      width : '50px',
      height : '50px',
      backgroundColor : "white",
      border : 'none',
      fontSize : '40px',
      padding : 0,
      lineHeight : 0
    }}
    onClick={handleFavorite}>{favorite}</button>
    <select>
      <option value={''}>{'상위 카테고리 선택'}</option>
    </select>
    <select>
      <option value={''}>{'하위 카테고리 선택'}</option>
    </select>
    <SeasonButton />
    <Input type="text" placeholder={'이름을 입력해주세요'}/>
    <Input type="text" placeholder={'태그를 입력해주세요'}/>
    <Input type="text" placeholder={'연관코디 어떡하지...'}/>
    <Button value={'등록하기'} />
    <Link to='/main'>
    <Button value={'취소하기'} /></Link>
    <BottomMenu />
    </>
  );
}

export default AddColth;