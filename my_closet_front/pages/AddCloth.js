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
  const printImg = (e) => {
    console.log(e.target.files);
  }
  return(
    <>
    <div style={{textAlign:'center'}}>
    <Header />
    <p>{'의류 추가하기'}</p>
    <form>
    <Input type='file'
    width={'150px'}
    height={'150px'} 
    onChange={printImg}/>
    <button style={{
      width : '50px',
      height : '50px',
      backgroundColor : "white",
      border : 'none',
      fontSize : '40px',
      padding : 0,
      lineHeight : 0,
    }}
    onClick={handleFavorite}>{favorite}</button>
    <div style={{display:'block', margin:'10px auto'}}>
    <select style={{height:'30px', borderRadius:'5px', marginRight:'5px'}}>
      <option value={''}>{'상위 카테고리 선택'}</option>
    </select>
    <select style={{height:'30px', borderRadius:'5px'}}>
      <option value={''}>{'하위 카테고리 선택'}</option>
    </select>
    </div>
    </form>
    <SeasonButton width={'70px'} height={'30px'} margin={'5px auto'}/>
    <Input type="text" placeholder={'이름을 입력해주세요'}
    display={'block'} margin={'8px auto'}/>
    <Input type="text" placeholder={'태그를 입력해주세요'}
    display={'block'} margin={'8px auto'}/>
    <Input type="text" placeholder={'연관코디 어떡하지...'}
    display={'block'} margin={'8px auto'}/>
    <Button value={'등록하기'} height={'30px'} margin={'0 5px 0 0'}/>
    <Link to='/main'>
    <Button value={'취소하기'} height={'30px'}/></Link>
    </div>
    <BottomMenu />
    </>
  );
}

export default AddColth;