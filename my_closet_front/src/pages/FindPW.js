import Header from "../components/Header";
import {Link} from 'react-router-dom';
import Input from "../components/Input";
import Button from "../components/Button";
import { useState } from "react";
import axios from 'axios'

const FindPW = () => {
  const [id, setId] = useState('');
  const [email, setEmail] = useState('');
  const [pw, setPw] = useState('');
  const idHandler = (e) => {
    setId(e.target.value);
  }
  const emailHandler = (e) => {
    setEmail(e.target.value);
  }
  const getPw = () => {
    const pw = axios.create({
      baseURL : 'http://localhost:8000/'
    })
    pw.post('/api/user-findpw',null, {params: {
      id : id, email : email
    }}).then(function(response) {
      setPw(response.data);
      alert(`비밀번호 조회에 성공하였습니다.`)
    }).catch(function(error) {
      alert(`에러 발생 : ${error}`);
    })
  }
  return (
    <>
    <Header />
    <div style={{textAlign:'center'}}>
    <p>비밀번호 찾기</p>
    <p style={{fontSize:'small'}}>비밀번호를 찾기 위한 회원정보를 확인해주세요</p>
    
    <Input type={'text'} display={'block'} margin={'10px auto'}
    placeholder={'아이디'} onChange={idHandler}/>

    <Input type={'email'} display={'block'} margin={'10px auto'}
    placeholder={'이메일'} onChange={emailHandler}/>
    
    <Button value={'찾기'} width={'100px'} height={'25px'} onClick={getPw}/>

    <p>조회된 비밀번호 : <b>{pw}</b></p> 

    <Link to='/login'>
    <Button value={'로그인하기'} margin={'5px'}
    width={'100px'} height={'25px'}/></Link>
    <Link to='/'>
    <Button value={'취소'} 
    width={'100px'} height={'25px'}/></Link>
    </div>
    </>
  );
}

export default FindPW;