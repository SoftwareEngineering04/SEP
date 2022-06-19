import Header from '../components/Header';
import Button from '../components/Button';
import Input from '../components/Input';
import BottomMenu from '../components/BottomMenu';
import {Link} from 'react-router-dom';
import WithDrawModal from '../components/WithdrawModal';

const MyInfo = () => {
  //전역 상태 관리 공부해야하나... context API ? redux ? 
  return(
  <>
    <Header />
    <div style={{textAlign:'center'}}>
    <div style={{marginLeft:'70px', marginBottom:'50px'}}>{'나의 회원정보'}
    <Link to='/'>
    <Button value={'로그아웃'} margin={'0px 70px'} height={'30px'}/></Link></div>

    <div style={{display:'block', margin:'10px auto'}}>
    <label htmlFor={'name'}>{'이름 '}</label>
    <Input type={'text'} placeholder={'홍길동'}
    disabled={true} /></div>

    <div style={{display:'block', margin:'10px auto'}}>
    <label htmlFor={'id'}>{'아이디 '}</label>
    <Input type={'text'} placeholder={'qwer1234'}
    disabled={true} /></div>

    <div style={{display:'block', margin:'10px auto'}}>
    <label htmlFor={'mail'}>{'이메일 '}</label>
    <Input type={'email'} placeholder={'abcd@example.com'}
    disabled={true} /></div>

    <div style={{display:'block', margin:'10px auto'}}>
    <label htmlFor={'pw'}>{'비밀번호 '}</label>
    <Input type={'password'} placeholder={'abcd***'}
    disabled={true} /></div>

    <Link to='/changeinfo' style={{textDecoration:'none'}}>
    <Button value={'회원 정보 수정하기'} display={'block'}
     margin={'10px auto'} height={'30px'}/></Link>
    <Link to='/main'>
    <Button value={'확인'} height={'30px'}/></Link>
    <WithDrawModal value={'회원탈퇴'}/>
    </div>
    <BottomMenu />
  </>
  );
}

export default MyInfo;