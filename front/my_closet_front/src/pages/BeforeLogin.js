import Button from "../components/Button";
import Header from "../components/Header";
import {Link} from 'react-router-dom';

const BeforeLogin = () => {
  return (
    <>
    <Link to="/login">
    <Header />
    <img alt={"mainLogo"} src={require("../images/mainLogo.jpg")} />
    <Button 
    width={"100px"} 
    height={"30px"} 
    value={"들어가기"}
    backgroundColor={"rgba(52,152,219,0.28)"}
    color={"white"}
    ></Button>
    </Link>
  </>);
}

export default BeforeLogin;