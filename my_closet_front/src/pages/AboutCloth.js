import Header from "../components/Header";
import Button from "../components/Button";
import {useLocation, useNavigate} from 'react-router-dom';

const AboutCloth = (props) => {
  const navigate = useNavigate();
  const location = useLocation();
  const {url} = location.state;
  const {name} = location.state;
  const {category} = location.state;
  const {subcategory} = location.state;
  const {filter} = location.state;

  return(
    <>
    <Header />
    <div style={{
      display:'block', margin:'0px auto', textAlign:'center'
    }}>
    <p>{'의류 상세 정보'}</p>
    <img alt={'의류 이미지'} src={url} 
    style={{width:'150px', height:'150px'}}/>
    <p>이름 | {name}</p>
    {/*<p>즐겨찾기 | {props.isFavorite ? '★' : '☆'}</p>*/}
    <p>카테고리 | {category} - {subcategory}</p>
    <p>계절 | {filter}</p>

    <Button value={'확인'} width={'200px'} height={'25px'}
    onClick={() => navigate(-1)}/>

    <hr style={{border:'none'}}></hr>
    <Button value={'삭제하기'} width={'100px'} height={'25px'}
    margin={'0 5px 0 0'}/>

    <Button value={'수정하기'} width={'100px'} height={'25px'}/>
    </div>
    </>
  );
}

export default AboutCloth;