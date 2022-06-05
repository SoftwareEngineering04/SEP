import Header from "../components/Header";
import {Link} from 'react-router-dom';
import Input from "../components/Input";
import Button from "../components/Button";

const FindPW = () => {
  return (
    <>
    <Header />
    <p>비밀번호 찾기</p>
    <p>비밀번호를 찾기 위한 회원정보를 확인해주세요</p>
    <Input type={'text'}
    placeholder={'아이디'} />
    <Input type={'email'}
    placeholder={'이메일'} />
    <Button value={'찾기'} />
    <p>조회된 비밀번호는 다음과 같습니다.</p>
    <p><b>hong123***</b></p>

    <Link to='/login'>
    <Button value={'로그인하기'} /></Link>
    <Link to='/'>
    <Button value={'취소'} /></Link>
    </>
  );
}

export default FindPW;