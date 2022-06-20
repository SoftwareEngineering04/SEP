import Button from "../components/Button";
import Header from "../components/Header";
import {Link} from 'react-router-dom';


const BeforeLogin = () => {
  
  return (
    <>
    <Header />
    {/*로고 이미지*/}
    <img alt={"mainLogo"} src={require("../images/mainLogo.jpg")} 
    style={{
      display : 'block',
      margin : '0px auto'
    }}/>
    
    {/*들어가기 버튼*/}
    <Link to="/login" style={{textDecoration : 'none'}}>
    <Button 
    display={'block'} margin={'0px auto'}
    width={"100px"} height={"30px"} 
    value={"들어가기"} backgroundColor={"rgba(52,152,219,0.28)"}
    color={"white"} textDecoration={'none'}></Button></Link>
  </>);
}

export default BeforeLogin;