import Button from "../components/Button";
import Header from "../components/Header";
import Input from "../components/Input";
import {Link} from 'react-router-dom';

const Join = () => {
  return (
    <>
    <Header />
    <form style={{
      textAlign:'center',
      margin:'0px auto',
      display:'block'
    }}>
    <label>회원정보를 입력하세요</label>
    <Input type={'text'}
    placeholder={'이름'}
    height={'20px'} display={'block'} margin={'10px auto'}/>
    <Input type={'text'}
    placeholder={'아이디'}
    height={'20px'} display={'block'} margin={'10px auto'}/>
    <Input type={'password'}
    placeholder={'비밀번호'}
    height={'20px'} display={'block'} margin={'10px auto'}/>
    <Input type={'password'}
    placeholder={'비밀번호를 확인해주세요'}
    height={'20px'} display={'block'} margin={'10px auto'}/>
    <Input type={'email'}
    placeholder={'이메일'}
    height={'20px'} display={'block'} margin={'10px auto'}/>
    

    <p>회원정보를 등록하시겠습니까?</p>
    <Link to='/login'>
    <Button width={'80px'} height={'30px'} value={'예'} margin={'0 5px 0 0'} /></Link>
    <Link to='/login'>
    <Button width={'80px'} height={'30px'} value={'아니오'} /></Link>
    </form>
    </>
  );
}

export default Join;