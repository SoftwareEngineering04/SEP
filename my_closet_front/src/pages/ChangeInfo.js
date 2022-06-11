import { Link } from "react-router-dom";
import BottomMenu from "../components/BottomMenu";
import Button from "../components/Button";
import Header from "../components/Header";
import Input from "../components/Input";

const ChangeInfo = () => {
  return (
    <>
    <Header />
    <div style={{textAlign:'center'}}>
    <div>
    <div style={{display:'block'}}>{'회원정보 수정'}</div>
    <div style={{display:'block'}}>{'나의 정보'}</div>
    </div>

    <div style={{display:'block', margin:'10px auto'}}>
    <label htmlFor="id">{'아이디'}</label>
    <Input type={'text'}
    placeholder={'qwer1234'}
    disabled={true} /></div>

    <div style={{display:'block', margin:'10px auto'}}>
    <label htmlFor="name">{'이름'}</label>
    <Input type={'text'}
    placeholder={'홍길동'} /></div>

    <div style={{display:'block', margin:'10px auto'}}>
    <label htmlFor="mail">{'이메일'}</label>
    <Input type={'email'}
    placeholder={'abcd@example.com'} /></div>

    <div style={{display:'block', margin:'10px auto'}}>
    <label htmlFor="pw">{'비밀번호'}</label>
    <Input type={'password'}
    placeholder={'새 비밀번호'} /></div>

    <div style={{display:'block', margin:'10px auto'}}>
    <label htmlFor="pwcheck">{'비밀번호 확인'}</label>
    <Input type={'password'}
    placeholder={'비밀번호 확인'} /></div>

    <Link to='/myinfo'>
    <Button value={'저장하기'} height={'30px'} margin={'0 5px 0 0'}/></Link>
    <Link to='/myinfo'>
    <Button value={'뒤로가기'} height={'30px'}/></Link>
    </div>
    <BottomMenu />
    </>
  );
}

export default ChangeInfo;