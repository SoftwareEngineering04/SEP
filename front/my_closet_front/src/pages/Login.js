import Button from "../components/Button";
import Header from "../components/Header"
import Input from "../components/Input"
import {Link} from 'react-router-dom';

const Login = () => {
  return (
    <>
    <Header />
    <p>My Closet 서비스를 이용하시려면 로그인을 해주세요.</p>
    <Input type={"text"} 
    placeholder={"아이디를 입력하세요"} 
    height={"25px"}/>
    <Input type={"password"}
    placeholder={"비밀번호를 입력하세요"}
    height={"25px"} />
    <Button backgroundColor={"transparent"} 
    color={"rgba(41,90,221,0.35)"}
    value={"아이디찾기"} />
    <Button backgroundColor={"transparent"} 
    color={"rgba(41,90,221,0.35)"}
    value={"비밀번호찾기"} />
    <Button backgroundColor={"rgba(224,224,224,0.29)"}
    value={"로그인하기"} 
    width={"200px"} height={"30px"}/>
    <Link to='/'>
    <Button backgroundColor={"rgba(224,224,224,0.29)"}
    value={"뒤로가기"} 
    width={"100px"} height={"30px"} />
    </Link>
    <Button backgroundColor={"rgba(224,224,224,0.29)"}
    value={"회원가입"} 
    width={"100px"} height={"30px"}/>
    </>
  )
}

export default Login;