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
        cid : props.cid,
        favorite: props.favorite,
      }
    })}

  return(
    <div style={{display:'block', margin:'0px auto' ,
    textAlign:'center', padding:'5px'}}>
      <img alt={'이미지'} src={url}
      style={{width:'100px', height:'100px',
      border:'1px solid black'}} /> 
      <p>이름 | {props.name}</p>
      <p>카테고리 | {props.category} - {props.subcategory}</p>
      
      <Button value={'상세보기'} width={'70px'} height={'25px'}
      onClick={moveAbout}/>
    
    </div>
  );

}

export default ClothInfo;