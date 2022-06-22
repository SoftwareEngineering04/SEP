import Button from "../components/Button";
import Header from "../components/Header";
import Input from "../components/Input";
import {useState} from 'react';
import { Link, useNavigate } from "react-router-dom";
import BottomMenu from "../components/BottomMenu";
import SeasonButton from "../components/SeasonButton";
import FavorateButton from "../components/FavorateButton";
import ParentCategory from "../components/ParentCategory";
import axios from "axios";
import { useSelector } from "react-redux";

const AddColth = () => {
  const navigate = useNavigate();

  const userId = useSelector((state) => state.id)

  const [firstCategory, setFirstCategory] = useState('');
  const [secondCategory, setSecondCategory] = useState('');
  const [season, setSeason] = useState([]);
  const [favorite, setFavorite] = useState(false);
  const [name, setName] = useState('');
  const [fd, setFd] = useState();

  const handleName = (e) => setName(e.target.value);
  const handleFile = (e) => {
    const img = e.target.files[0];
    const formData = new FormData();
    formData.append('img', img);
    setFd(formData);
  }
  
  const postData = () => {
    const cloth = axios.create({
      baseURL: 'http://localhost:8000/'
    })
    cloth.post('/clothes/add', fd,{params: {
        name:name, category:firstCategory, subcategory : secondCategory, 
        filter : season.toString(), favorite : favorite, id:userId
      }}).then(function (response){
      if(response.data===-1) {
        alert(`옷 등록에 실패하였습니다`);
      }
      else {
      alert(`옷이 등록되었습니다`);
      navigate('/main')
    }
    }).catch(function (error){
      console.log(`옷 등록 에러 발생 : ${error}`);
    })
  }
  return(
    <>
    <div style={{textAlign:'center'}}>
    <Header />
    <p>{'의류 추가하기'}</p>

    <div style={{display:'inline'}}>

    {/*이미지(파일) 업로드*/}
    <Input type='file' width={'200px'} height={'50px'} display={'block'}
    onChange={handleFile} margin={'0px auto'}/>

    </div>
    {/*즐겨찾기 버튼*/}
    <p style={{display:'inline'}}>즐겨찾기 : </p>
    <FavorateButton setFavorite={setFavorite}/>

    {/*카테고리 컴포넌트*/}
    <div style={{display:'block', margin:'10px auto'}}>
    <ParentCategory setFirstCategory={setFirstCategory} 
    setSecondCategory={setSecondCategory}/>
    </div>

    {/*계절 컴포넌트*/}
    <SeasonButton width={'70px'} height={'30px'} margin={'5px auto'}
    season={season} setSeason={setSeason}/>

    {/*이름 입력*/}
    <Input type="text" placeholder={'이름을 입력해주세요(최대 8글자)'}
    display={'block'} margin={'8px auto'} onChange={handleName}
    maxLength={'8'} width={'150px'}/>
    
    {/*일단 태그와 연관코디는 신경쓰지 말자*/}

    {/*등록하기 버튼*/}
    <Button value={'등록하기'} height={'30px'} margin={'0 5px 0 0'}
    onClick={() => {postData();}}/>
    {/*취소하기 버튼*/}
    <Link to='/main'>
    <Button value={'취소하기'} height={'30px'}/></Link>
    </div>
    <BottomMenu />
    </>
  );
}

export default AddColth;