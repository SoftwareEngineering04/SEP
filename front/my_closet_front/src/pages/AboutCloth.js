import Header from "../components/Header";
import Button from "../components/Button";

const AboutCloth = (props) => {
  return(
    <>
    <Header />
    <p>{'의류 상세 정보'}</p>
    <img alt={'의류 이미지'} src={props.url} />
    <p>{props.name}</p>
    <p>{props.tag}</p>
    <p>{props.isFavorite ? '★' : '☆'}</p>
    <p>{props.season}</p>
    <p>{props.category}</p>
    <img alt={'연관코디'} src={props.url2} />
    <Button value={'확인'} />
    <Button value={'삭제하기'} />
    <Button value={'수정하기'} />
    </>
  );
}

export default AboutCloth;