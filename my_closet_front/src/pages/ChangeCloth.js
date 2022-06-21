import Button from "../components/Button";
import CategoryButton from "../components/CategoryButton";
import Header from "../components/Header";
import Input from "../components/Input";
import SeasonButton from "../components/SeasonButton";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const ChangeCloth = (props) => {
  


  return(
    <>
    <Header />

    <div style={{textAlign:'center'}}>
    <img alt='img' src={props.url} />

    <hr style={{border:'none'}}></hr>
    <label>이름</label>
    <Input type={'text'} placeholder={'name'} 
    margin={'20px auto'}/>

    <hr style={{border:'none'}}></hr>
    <CategoryButton width={'55px'} height={'30px'}/>

    <hr style={{border:'none'}}></hr>
    <SeasonButton width={'55px'} height={'30px'}/>

    <hr style={{border:'none'}}></hr>
    <Button value={'수정하기'} width={'70px'} 
    height={'30px'} margin={'0 5px 0 0'}/>

    <Button value={'취소'} width={'50px'} height={'30px'}/>
    </div>
    </>
  );
}

export default ChangeCloth;