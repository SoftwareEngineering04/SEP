import { useEffect } from "react";
import BottomMenu from "../components/BottomMenu";
import Header from "../components/Header";

const Favorite = () => {
  const getFavorate = () => {
    //get 방식으로 즐겨찾기 목록 가져오기
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