import Header from "../components/Header";
import {Link} from 'react-router-dom';
import Input from "../components/Input";
import Button from "../components/Button";
import {useState} from 'react';
import axios from 'axios';

const FindID = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [id, setId] = useState('');
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
    id.post('/api/user-findid', null, {params: {
      name:name, email:email
    }}).then(function(response) {
      setId(response.data);
      alert(`ID 조회에 성공하였습니다.`)
    }).catch(function(error) {
      alert(`에러 발생 : ${error}`);
    })
  }

  return (
    <>
    <Header />
    <div style={{textAlign:'center'}}>
    <p>아이디찾기</p>
    <p style={{fontSize:'small'}}>아이디 찾기를 위한 회원정보를 확인해주세요</p>

    <Input type={'text'} display={'block'} 
    margin={'10px auto'} color={'black'}
    placeholder={'이름'} onChange={nameHandler}/>

    <Input type={'email'} display={'block'} 
    margin={'0px auto'} color={'black'}
    placeholder={'이메일'} onChange={emailHandler}/>

    <Button value={'찾기'} display={'block'} 
    margin={'10px auto'} width={'100px'} height={'25px'} onClick={getId} />

    <p>조회된 아이디 : <b>{id}</b></p>

    <Link to='/login'>
    <Button value={'로그인하기'} margin={'5px'}
    width={'100px'} height={'25px'}/></Link>
    <Link to='/'>
    <Button value={'취소'} 
    width={'100px'} height={'25px'}/></Link>
    </div>
    </>
  )
}

export default FindID;