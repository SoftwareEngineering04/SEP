import Header from "../components/Header";
import {Link} from 'react-router-dom';
import Input from "../components/Input";
import Button from "../components/Button";

const FindID = () => {
  return (
    <>
    <Header />
    <div style={{textAlign:'center'}}>
    <p>아이디찾기</p>
    <p style={{fontSize:'small'}}>아이디 찾기를 위한 회원정보를 확인해주세요</p>
    <Input type={'text'} display={'block'} margin={'10px auto'}
    placeholder={'이름'} />
    <Input type={'email'} display={'block'} margin={'0px auto'}
    placeholder={'이메일'} />
    <Button value={'찾기'} display={'block'} 
    margin={'10px auto'} height={'25px'}/>
    <Input type={'text'} display={'block'} margin={'10px auto'}
    placeholder={'abcde12345'}
    disabled={true} />

    <Link to='/login'>
    <Button value={'로그인하기'} /></Link>
    <Link to='/'>
    <Button value={'취소'} /></Link>
    </div>
    </>
  )
}

export default FindID;