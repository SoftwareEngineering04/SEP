import Button from "../components/Button";
import Header from "../components/Header"
import Input from "../components/Input"
import {Link} from 'react-router-dom';
import {useEffect,useRef} from 'react';

const Login = () => {
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  },[])

  const loginAlert = () => {
    alert(`환영합니다! ${inputRef.current.value} 님`);
  }

  return (
    <>
    <Header />
    <div style={{textAlign : 'center'}}>
    <p style={{fontSize:'small'}}>My Closet 서비스를 이용하시려면 로그인을 해주세요.</p>
    <div>
      <label htmlFor="id">아이디 </label>
      <Input id={"id"} type={"text"} 
      placeholder={"아이디를 입력하세요"} 
      height={"25px"} ref={inputRef}
      width={'200px'}/>
      <hr style={{border : 'none'}} />
      <label htmlFor={"pw"}>비밀번호 </label>
      <Input id={'pw'} type={"password"}
      placeholder={"비밀번호를 입력하세요"}
      height={"25px"}
      width={'200px'}/>
    </div>
    <div style={{display : 'block'}}>
    <Link to='/findid'>
    <Button backgroundColor={"transparent"} 
    color={"rgba(41,90,221,0.35)"}
    value={"아이디찾기"} /></Link>
    <Link to='/findpw'>
    <Button backgroundColor={"transparent"} 
    color={"rgba(41,90,221,0.35)"}
    value={"비밀번호찾기"} /></Link>
    </div>

    <Link to='/main' style={{textDecoration : 'none'}}>
    <Button backgroundColor={"rgba(224,224,224,0.29)"}
    value={"로그인하기"} display={'block'} margin={'0px auto'}
    width={"200px"} height={"30px"}
    onClick={loginAlert}/></Link>
    <div style={{margin:'5px'}}>
      <Link to='/'>
      <Button backgroundColor={"rgba(224,224,224,0.29)"}
      value={"뒤로가기"} 
      width={"100px"} height={"30px"} /></Link>
      <Link to='/join'>
      <Button backgroundColor={"rgba(224,224,224,0.29)"}
      value={"회원가입"} 
      width={"100px"} height={"30px"}/></Link>
    </div>
    </div>
    </>
  );
}

export default Login;