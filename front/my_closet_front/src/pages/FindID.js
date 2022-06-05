import Header from "../components/Header";
import {Link} from 'react-router-dom';
import Input from "../components/Input";
import Button from "../components/Button";

const FindID = () => {
  return (
    <>
    <Header />
    <p>아이디찾기</p>
    <p>아이디 찾기를 위한 회원정보를 확인해주세요</p>
    <Input type={'text'}
    placeholder={'이름'} />
    <Input type={'email'}
    placeholder={'이메일'} />
    <Button value={'찾기'} />
    <Input type={'text'}
    placeholder={'abcde12345'}
    disabled={true} />

    <Link to='/login'>
    <Button value={'로그인하기'} /></Link>
    <Link to='/'>
    <Button value={'취소'} /></Link>
    </>
  )
}

export default FindID;