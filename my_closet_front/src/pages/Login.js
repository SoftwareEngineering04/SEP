import Button from "../components/Button";
import Header from "../components/Header"
import Input from "../components/Input"
import {Link} from 'react-router-dom';
import {useEffect,useRef,useState} from 'react';
import axios from 'axios'
import { useDispatch } from "react-redux";


const Login = () => {
  const dispatch = useDispatch();
  const [id, setId] = useState(); //아이디 state
  const [pw, setPw] = useState(); //비밀번호 state
  const [isLogin, setIsLogin] = useState('none'); //로그인 성공/실패 여부

  //아이디 입력 -> state로 설정
  const handleId = (e) => setId(e.target.value);
  //비밀번호 입력 -> state로 설정
  const handlePw = (e) => setPw(e.target.value);

  const handleLogin = () => { //로그인 버튼 누르면 서버와 통신
    const login = axios.create({
      baseURL: 'http://localhost:8000/'
    })
    login.post('/api/login', null,{params: {
        id: id, password: pw
      }}).then(function (response){
      if(response.data.id === undefined || response.data.password === undefined) {
         setIsLogin('none');
        alert(`로그인 실패, 경로 : ${isLogin}`);
      }
      else {
      setIsLogin('');
      alert(`로그인 성공, 경로 : ${isLogin}
      id : ${response.data.id}, pw : ${response.data.password}
      name : ${response.data.name}, email : ${response.data.email}`);

      dispatch({type : 'login', loginId : response.data.id,
      loginPw : response.data.password, loginName : response.data.name,
      loginEmail : response.data.email});
    }
    }).catch(function (error){
      console.log(`경로 : ${isLogin}  에러 발생 : ${error}`);
    })
  }

  const inputRef = useRef(); //아이디 입력칸으로 우선 focus
  useEffect(() => {
    inputRef.current.focus();
  },[])
  const inputRefPw = useRef(); //비밀번호 입력칸 가리킴(focust 없애야하는거 아닌가...?)

  /*const loginAlert = () => { //환영문구도 로그인 성공시로 바꿔줘야함
    alert(`환영합니다! ${inputRef.current.value} 님`);
  }*/
    
  return (
    <>
    <Header />
    <div style={{textAlign : 'center'}}>
    <p style={{fontSize:'small'}}>My Closet 서비스를 이용하시려면 로그인을 해주세요.</p>
    <div>
      {/*아이디 입력 태그 */} 
      <label htmlFor="id">아이디 </label>
      <Input id={"id"} type={"text"} 
      placeholder={"아이디를 입력하세요"} 
      height={"25px"} ref={inputRef}
      width={'200px'} onChange = {handleId}/>

      {/*비밀번호 입력 태그 */} 
      <hr style={{border : 'none'}} />
      <label htmlFor={"pw"}>비밀번호 </label>
      <Input id={'pw'} type={"password"}
      placeholder={"비밀번호를 입력하세요"}
      height={"25px"} onChange={handlePw}
      width={'200px'} ref={inputRefPw}/>
    </div>

    {/*아이디찾기 버튼*/} 
    <div style={{display : 'block'}}>
    <Link to='/findid'>
    <Button backgroundColor={"transparent"} 
    color={"rgba(41,90,221,0.35)"}
    value={"아이디찾기"}  margin={'10px auto'}/></Link>

    {/*비밀번호찾기 버튼*/} 
    <Link to='/findpw'>
    <Button backgroundColor={"transparent"} 
    color={"rgba(41,90,221,0.35)"}
    value={"비밀번호찾기"} /></Link>
    </div>
    <div></div> {/*아이디, 비밀번호 잘못입력시 문구 출력 해야함*/}

    {/*로그인 버튼*/}
    <Button backgroundColor={"rgba(224,224,224,0.29)"}
    value={"로그인하기"} display={'block'} margin={'20px auto'}
    width={"200px"} height={"30px"}
    onClick={() => {
      handleLogin(); }
      }/>

    {/*로그인 성공시 보여지는 들어가기 버튼*/}
    <div style={{display:isLogin}}>
      <p>로그인에 성공하였습니다.</p>
      <Link to={'/main'} style={{textDecoration : 'none'}}>
      <Button value={'들어가기'} backgroundColor={'skyblue'}
      width={'200px'} height={'30px'} margin={'0 0 7px 0'}/>
      </Link>
    </div>
    <div style={{margin:'5px'}}>
      {/*뒤로가기 버튼*/}
      <Link to='/'>
      <Button backgroundColor={"rgba(224,224,224,0.29)"}
      value={"뒤로가기"} margin={'0 5px 0 0'}
      width={"100px"} height={"30px"} /></Link>
      {/*회원가입 버튼*/}
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