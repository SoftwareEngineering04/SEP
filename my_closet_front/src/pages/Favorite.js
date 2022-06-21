import { useEffect } from "react";
import BottomMenu from "../components/BottomMenu";
import Header from "../components/Header";
import axios from "axios";

const Favorite = () => {
  const getFavorate = () => {
    const fav = axios.create({
      baseURL: 'http://localhost:8000/'
    })
    fav.post('/api/???', null,{params: {
        favorite : true,
      }}).then(function (response){
        console.log(response.data);
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
    <p>즐겨찾기 목록 출력해야함...</p>
    </div>
    <BottomMenu />
    </>
  );
}

export default Favorite;