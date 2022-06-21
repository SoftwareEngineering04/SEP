import { useNavigate } from "react-router-dom";
import Button from "./Button";

const ClothInfo = (props) => {
  const url = props.photo.toString();
  const naviate = useNavigate();

  const moveAbout = () => {
    naviate('/aboutcloth', {
      state : {
        url:url, name:props.name,
        category:props.category,
        subcategory:props.subcategory,
        filter:props.filter,
        cid : props.cid
      }
    })}

  return(
    <div style={{border : '1px solid black', 
    width:'300px', height:'300px'}}>
    <img alt={'이미지'} src={url}
    style={{width:'100px', height:'100px'}} /> 
    <p>이름 : {props.name}</p>
    <p>카테고리 : {props.category} - {props.subcategory}</p>
    <p>cid : {props.cid}</p>
    
    <Button value={'상세보기'} width={'70px'} height={'20px'}
    onClick={moveAbout}/>
    
    </div>
  );

}

export default ClothInfo;