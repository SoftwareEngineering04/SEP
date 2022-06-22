import Button from "../components/Button";
import Header from "../components/Header";
import Input from "../components/Input";
import {Link} from 'react-router-dom';
import {useState} from 'react';
import axios from 'axios';

const Join = () => {
  const [name, setName] = useState('');
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const [pw2, setPw2] = useState('');
  const [email, setEmail] = useState('');
  const [pwPass, setPwPass] = useState('none');
  const [isJoin, setIsJoin] = useState('none');

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
   //서버로 전송
   const handleJoin = () => {
    if(pw===pw2) { 
      setPwPass('none');
      const join = axios.create({
        baseURL: 'http://localhost:8000/'
      })
      join.post('/api/user-adduser', null,{params: { 
          id: id, password: pw, name:name, email:email
        }}).then(function (response){
        if(response.data===-1) {
          alert('회원가입 실패');
        }
        else {
        alert(`회원가입에 성공하였습니다.`)
        setIsJoin('');
      }
      }).catch(function (error){
        alert(`에러발생 : ${error}`);
      })
    } else {
      setPwPass('');
      alert('비밀번호를 확인해주세요');
    }
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
    <Link to='/login'>
    <Button width={'80px'} height={'30px'} 
    value={'예'} margin={'0 5px 0 0'} onClick={() => {
    handleJoin(); checkPw();}}/></Link>
    <Link to='/login'>
    <Button width={'80px'} height={'30px'} value={'아니오'} /></Link>
    <div style={{display:isJoin}}>
      <p>회원가입에 성공하였습니다.</p>
      <Link to={'/login'} style={{textDecoration : 'none'}}>
      <Button value={'로그인하러가기'} backgroundColor={'skyblue'}
      width={'200px'} height={'30px'} margin={'0 0 7px 0'}/>
      </Link>
    </div>
    </div>
    </>
  );
}

export default Join;