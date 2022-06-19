import Header from "../components/Header";
import {Link} from 'react-router-dom';
import Input from "../components/Input";
import Button from "../components/Button";
import {useState} from 'react';
import axios from 'axios';

const FindID = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const nameHandler = (e) => {
    setName(e.target.value);
  }
  const emailHandler = (e) => {
    setEmail(e.target.value);
  }
  const getId = () => {
    const id = axios.create({
      baseURL : 'http://localhost:8000/'
    })
    id.get('/api/findid', null, {params: {
      name:name, email:email
    }}).then(function(response) {
      console.log(response.data);
    }).catch(function(error) {
      console.log(error);
    })
  }

  return (
    <>
    <Header />
    <div style={{textAlign:'center'}}>
    <p>아이디찾기</p>
    <p style={{fontSize:'small'}}>아이디 찾기를 위한 회원정보를 확인해주세요</p>

    <Input type={'text'} display={'block'} margin={'10px auto'} color={'black'}
    placeholder={'이름'} onChange={nameHandler}/>
    <Input type={'email'} display={'block'} margin={'0px auto'} color={'black'}
    placeholder={'이메일'} onChange={emailHandler}/>

    <Button value={'찾기'} display={'block'} 
    margin={'10px auto'} height={'25px'} onClick={getId} />

    <Input type={'text'} display={'block'} margin={'10px auto'}
    placeholder={'abcde12345'} disabled={true} />

    <Link to='/login'>
    <Button value={'로그인하기'} margin={'5px'}/></Link>
    <Link to='/'>
    <Button value={'취소'} /></Link>
    </div>
    </>
  )
}

export default FindID;