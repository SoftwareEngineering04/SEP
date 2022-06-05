import Header from '../components/Header';
import Button from '../components/Button';
import Input from '../components/Input';
import BottomMenu from '../components/BottomMenu';
import {Link} from 'react-router-dom';

const MyInfo = () => {
  return(
  <>
    <Header />
    <div>{'나의 회원정보'}</div>
    <Link to='/'>
    <Button value={'로그아웃'} /></Link>
    <label htmlFor={'name'}>{'이름'}</label>
    <Input type={'text'} placeholder={'홍길동'}
    disabled={true} />
    <label htmlFor={'id'}>{'아이디'}</label>
    <Input type={'text'} placeholder={'qwer1234'}
    disabled={true} />
    <label htmlFor={'mail'}>{'이메일'}</label>
    <Input type={'email'} placeholder={'abcd@example.com'}
    disabled={true} />
    <label htmlFor={'pw'}>{'비밀번호'}</label>
    <Input type={'password'} placeholder={'abcd***'}
    disabled={true} />

    <Link to='/changeinfo'>
    <Button value={'회원 정보 수정하기'} /></Link>
    <Link to='/main'>
    <Button value={'확인'} /></Link>
    <Button value={'회원 탈퇴'} />
    <BottomMenu />
  </>
  );
}

export default MyInfo;