import Button from "../components/Button";
import Header from "../components/Header";
import Input from "../components/Input";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from 'axios';
import FavorateButton from "../components/FavorateButton";
import ParentCategory from "../components/ParentCategory";
import SeasonButton from "../components/SeasonButton";

const ChangeCloth = () => {
  const naviagte = useNavigate();
  const goBack = () => naviagte(-1);

  const location = useLocation();

  const [firstCategory, setFirstCategory] = useState('');
  const [secondCategory, setSecondCategory] = useState('');
  const [season, setSeason] = useState([]);
  const [name, setName] = useState('');
  const [favorite, setFavorite] = useState(false);


  const navUrl = location.state.url;
  const cid = location.state.cid
  //const navName = location.state.name;
  //const navCategory = location.state.category;
  //const navSubCategory = location.state.subcategory;
  //const navFilter = location.state.filter;
  //const navFavorite = location.state.favorite;

  const handleName = (e) => setName(e.target.value);

  const changeClothInfo = () => {
    const cloth = axios.create({
      baseURL: 'http://localhost:8000/'
    })
    cloth.post('/clothes/update', null,{params: {
        photo:navUrl,
        name : name,
        category : firstCategory,
        subcategory : secondCategory,
        filter : season.toString(),
        favorite : favorite,
        cId : cid
      }}).then(function (response){
      console.log(response.data);
      alert('옷 수정이 완료되었습니다')
      naviagte(-1);
    }).catch(function (error){
      console.log(`에러 발생 : ${error}`);
    })
  }
  return(
    <>
    <Header />

    <div style={{textAlign:'center', display:'block',
    margin:'0px auto'}}>

    <p>의류 수정하기</p>

    <img alt={'의류 미이지'} src={navUrl} 
    style={{width:'150px', height:'150px'}}/>

    <FavorateButton setFavorite={setFavorite}/>
    
    <hr style={{border:'none'}}></hr>
    <label>{'이름  '}</label>
    <Input type={'text'} placeholder={'새 이름을 입력해주세요(최대 8글자)'} 
    margin={'20px auto'} onChange={handleName} width={'250px'}
    maxLength={'8'}/>

    <div style={{display:'center', margin:'0px auto'}}>
    <ParentCategory setFirstCategory={setFirstCategory}
    setSecondCategory={setSecondCategory}/>

    <SeasonButton width={'70px'} height={'30px'} margin={'5px auto'}
    season={season} setSeason={setSeason}/>
    </div>

    <hr style={{border:'none'}}></hr>
    <Button value={'변경내용 저장하기'} width={'150px'} 
    height={'30px'} margin={'0 5px 0 0'}
    onClick={changeClothInfo}/>

    <Button value={'취소'} width={'50px'} height={'30px'}
    onClick={goBack}/>
    </div>
    </>
  );
}

export default ChangeCloth;