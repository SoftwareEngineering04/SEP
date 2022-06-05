import { Link } from "react-router-dom";
import Button from "../components/Button";
import Header from "../components/Header";
import Input from "../components/Input";

const ChangeInfo = () => {
  return (
    <>
    <Header />
    <p>{'회원정보 수정'}</p>
    <p>{'나의 정보'}</p>
    <label htmlFor="id">{'아이디'}</label>
    <Input type={'text'}
    placeholder={'qwer1234'}
    disabled={true} />
    <label htmlFor="name">{'이름'}</label>
    <Input type={'text'}
    placeholder={'홍길동'} />
    <label htmlFor="mail">{'이메일'}</label>
    <Input type={'email'}
    placeholder={'abcd@example.com'} />
    <label htmlFor="pw">{'비밀번호'}</label>
    <Input type={'password'}
    placeholder={'새 비밀번호'} />
    <Input type={'password'}
    placeholder={'비밀번호 확인'} />

    <Link to='/myinfo'>
    <Button value={'수정하기'} /></Link>
    <Link to='/myinfo'>
    <Button value={'뒤로가기'} /></Link>
    </>
  );
}

export default ChangeInfo;