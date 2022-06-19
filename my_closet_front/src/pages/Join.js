import Button from "../components/Button";
import Header from "../components/Header";
import Input from "../components/Input";
import {Link} from 'react-router-dom';
import {useState} from 'react';

const Join = () => {
  const [name, setName] = useState('');
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const [pw2, setPw2] = useState('');
  const [email, setEmail] = useState('');
  const [pwPass, setPwPass] = useState('none');

  const handleName = (e) => setName(e.target.value);
  const handleId = (e) => setId(e.target.value);
  const handlePw = (e) => setPw(e.target.value);
  const handlePw2 = (e) => setPw2(e.target.value);
  const handleEmail = (e) => setEmail(e.target.value);
  const checkPw = (e) => {
    if(pw===pw2) {
      setPwPass('none');
    } else {
      setPwPass('');
    }
  }
  const makeData = () => {
   const joinInfo = {
    name : name,
    id : id,
    pw : pw,
    email : email,
   }
   console.log(joinInfo);
   //joinInfo를 서버로 넘기는거 테스트 해봐야함
  }

  return (
    <>
    <Header />
    <div style={{
      textAlign:'center',
      margin:'0px auto',
      display:'block'
    }}>
    <label>회원정보를 입력하세요</label>
    <Input type={'text'} placeholder={'이름'}
    height={'20px'} display={'block'} margin={'10px auto'}
    onChange={handleName}/>

    <Input type={'text'} placeholder={'아이디'}
    height={'20px'} display={'block'} margin={'10px auto'}
    onChange={handleId}/>

    <Input type={'password'} placeholder={'비밀번호'}
    height={'20px'} display={'block'} margin={'10px auto'}
    onChange={handlePw}/>

    <Input type={'password'} placeholder={'비밀번호를 확인해주세요'}
    height={'20px'} display={'block'} margin={'10px auto'}
    onChange={handlePw2}/>
    <p style={{display:pwPass}}>비밀번호가 일치하지 않습니다.</p>

    <Input type={'email'} placeholder={'이메일'}
    height={'20px'} display={'block'} margin={'10px auto'}
    onChange={handleEmail}/>
    

    <p>회원정보를 등록하시겠습니까?</p>
    {/*예 버튼을 누르면 checkPw 하고 서버로 보낼 data 만들고 login 화면으로
    이동하도록 구현해야함 (지금은 Link 없앰)*/}
    <Button width={'80px'} height={'30px'} 
    value={'예'} margin={'0 5px 0 0'} onClick={() => {checkPw(); makeData();}}/>
    <Link to='/login'>
    <Button width={'80px'} height={'30px'} value={'아니오'} /></Link>
    </div>
    </>
  );
}

export default Join;