import { useEffect, useState } from "react";
import Header from "../components/Header";
import BottomMenu from "../components/BottomMenu";
import {useLocation } from "react-router-dom";
import ParentCategory from "../components/ParentCategory";
import Button from "../components/Button";

const ClothList = () => {
  const [clothList, setClothList] = useState([]);
  const location = useLocation(); 
  const [firstCategory, setFirstCategory] = useState();
  const [secondCategory, setSecondCategory] = useState();
  const [season, setSeason] = useState();
  
  useEffect(() => {
    setFirstCategory(location.state.category);
    setSeason(location.state.season); 
  },[firstCategory, location.state.category, location.state.season, season]);

  
  return(
    <>
    <Header />
    <div style={{textAlign:'center'}}>
    <div style={{margin:'10px auto'}}>
    <ParentCategory category={firstCategory} season={season} disabled={true}
    setFirstCategory={setFirstCategory} setSecondCategory={setSecondCategory}/>
    <div style={{display:'block', margin:'0 auto'}}>
    {season && season.map((val) => (
      <Button value={val} backgroundColor='skyblue'
      margin={'5px 5px 0 0'} width={'50px'} height={'30px'} cursor={'default'}/>
    ))}
    </div>
    </div>
    <div>
      <p>{'의류 목록 출력해야함...'}</p>
    {<ul>
      {clothList.map((cloth) => (
        <li>{cloth}</li>
        //의류 클릭하면 상세정보로 넘어가게도 해야함
      ))}  
    </ul>}
    </div>
    </div>
    <BottomMenu />
    </>
  );
}

export default ClothList;