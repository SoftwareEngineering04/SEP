import {useEffect, useState } from "react";
import OuterChild from "./OuterChild";
import TopChild from './TopChild';
import BottomChild from './BottomChild';
import ShoesChild from "./ShoesChild";

const ParentCategory = (props) => {
  const [childCategory, setChildCategory] = useState('');
  const [isOuter, setOuter] = useState('none');
  const [isTop, setTop] = useState('none');
  const [isBottom, setBottom] = useState('none');
  const [isShoes, setShoes] = useState('none');
  const categoryHandler = (e) => {
    setChildCategory(e.target.value);
  }
  useEffect(() => {
    if(props.category) {
      setChildCategory(props.category[0]);
    }
  },[props.category])
  useEffect(() => {
    if(childCategory==='아우터') {
      setOuter('');
      setTop('none');
      setBottom('none');
      setShoes('none');
    } else if(childCategory==='상의') {
      setOuter('none');
      setTop('');
      setBottom('none');
      setShoes('none');
    } else if(childCategory==='하의') {
      setOuter('none');
      setTop('none');
      setBottom('');
      setShoes('none');
    } else if(childCategory==='신발') {
      setOuter('none');
      setTop('none');
      setBottom('none');
      setShoes('');
    }
  },[isOuter, isTop, isBottom, isShoes, childCategory])
  
  return(
    <>
      <select name='parentCategory' disabled={props.disabled}
       style={{padding:'5px', borderRadius:'5px', 
       margin:'0 5px 0 0', border:'1px solid black', color:'black', opacity:'1'}}
       onChange={categoryHandler}>
        <option value=''>{'상위 카테고리'}</option>
        <option value='아우터' selected={!isOuter}>{'아우터'}</option>
        <option value='상의' selected={!isTop}>{'상의'}</option>
        <option value='하의' selected={!isBottom}>{'하의'}</option>
        <option value='신발' selected={!isShoes}>{'신발'}</option>
      </select>
      <OuterChild display={isOuter}/>
      <TopChild display={isTop}/>
      <BottomChild display={isBottom}/>
      <ShoesChild display={isShoes}/>
    </>
  );
}

export default ParentCategory;
