import Header from "../components/Header";
import {Link} from 'react-router-dom';
import Input from "../components/Input";
import Button from "../components/Button";

const FindPW = () => {
  return (
    <>
    <Header />
    <div style={{textAlign:'center'}}>
    <p>비밀번호 찾기</p>
    <p style={{fontSize:'small'}}>비밀번호를 찾기 위한 회원정보를 확인해주세요</p>
    <Input type={'text'} display={'block'} margin={'10px auto'}
    placeholder={'아이디'} />
    <Input type={'email'} display={'block'} margin={'10px auto'}
    placeholder={'이메일'} />
    <Button value={'찾기'} height={'25px'}/>
    <p style={{fontSize:'small'}}>조회된 비밀번호는 다음과 같습니다.</p>
    <p><b>hong123***</b></p> {/*여기에 조회된 비밀번호 와야함*/}

    <Link to='/login'>
    <Button value={'로그인하기'} /></Link>
    <Link to='/'>
    <Button value={'취소'} /></Link>
    </div>
    </>
  );
}

export default FindPW;