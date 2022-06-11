import Button from "../components/Button";
import Header from "../components/Header";
import {Link} from 'react-router-dom';
const BeforeLogin = () => {
  return (
    <>
    <Header />
    <img alt={"mainLogo"} src={require("../images/mainLogo.jpg")} 
    style={{
      display : 'block',
      margin : '0px auto'
    }}/>
    <Link to="/login" style={{textDecoration : 'none'}}>
    <Button 
    display={'block'}
    margin={'0px auto'}
    width={"100px"} 
    height={"30px"} 
    value={"들어가기"}
    backgroundColor={"rgba(52,152,219,0.28)"}
    color={"white"}
    textDecoration={'none'}></Button></Link>
  </>);
}

export default BeforeLogin;