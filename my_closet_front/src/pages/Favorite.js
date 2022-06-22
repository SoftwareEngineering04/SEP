import { useEffect, useState } from "react";
import BottomMenu from "../components/BottomMenu";
import Header from "../components/Header";
import axios from "axios";
import { useSelector } from "react-redux";
import ClothInfo from "../components/ClothInfo";

const Favorite = () => {
  const userId = useSelector((state) => state.id);
  const [clothList, setClothList] = useState([]);

  const getFavorate = () => {
    const fav = axios.create({
      baseURL: 'http://localhost:8000/'
    })
    fav.post('/clothes/byFavorite', null,{params: {
        id:userId,
      }}).then(function (response){
        console.log(response.data);
        setClothList(response.data);
    }).catch(function (error){
      console.log(`에러 발생 : ${error}`);
    })
  }

  useEffect(() => {
    getFavorate();
  },[]);
  return (
    <>
    <Header />
    <div style={{textAlign:'center'}}>
      <p>즐겨찾기 목록 : </p>
    {clothList && clothList.map((obj) => (
      <ClothInfo key={obj.name} name={obj.name} photo={obj.photo}
       category={obj.category} subcategory={obj.subcategory} 
       cid={obj.cid} favorite={obj.favorite}/>
      ))}
    </div>
    <BottomMenu />
    </>
  );
}

export default Favorite;