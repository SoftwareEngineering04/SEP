import { useEffect, useState } from "react";
import Header from "../components/Header";
import BottomMenu from "../components/BottomMenu";
import SeasonButton from "../components/SeasonButton";

const ClothList = () => {
  const [clothList, setClothList] = useState([]);
  const getClothList = () => {

  }
  useEffect(() => {
     getClothList();//fetch 후 setClothList 해줘야함
  },[clothList]);
  return(
    <>
    <Header />
    <select>
      <option value={''}>{'상위 카테고리'}</option>
    </select>
    <select>
      <option value={''}>{'상위 카테고리'}</option>
    </select>
    <select>
      <option value={''}>{'정렬 방식'}</option>
    </select>
    <SeasonButton />
    <div>
      <p>{'의류 목록 출력해야함...'}</p>
    {<ul>
      {clothList.map((cloth) => (
        <li>{cloth}</li>
        //의류 클릭하면 상세정보로 넘어가게도 해야함
      ))}  
    </ul>}
    </div>
    <BottomMenu />
    </>
  );
}

export default ClothList;