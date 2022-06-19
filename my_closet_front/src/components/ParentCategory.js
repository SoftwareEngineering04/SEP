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

  const [secondValue, setSecondValue] = useState('');

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
      props.setFirstCategory('아우터');
    } else if(childCategory==='상의') {
      setOuter('none');
      setTop('');
      setBottom('none');
      setShoes('none');
      props.setFirstCategory('상의');
    } else if(childCategory==='하의') {
      setOuter('none');
      setTop('none');
      setBottom('');
      setShoes('none');
      props.setFirstCategory('하의');
    } else if(childCategory==='신발') {
      setOuter('none');
      setTop('none');
      setBottom('none');
      setShoes('');
      props.setFirstCategory('신발');
    }
  },[isOuter, isTop, isBottom, isShoes, childCategory]);

  useEffect(() => {
    props.setSecondCategory(secondValue);
  },[secondValue])
  
  return(
    <>
      <select name='parentCategory' disabled={props.disabled}
       style={{padding:'5px', borderRadius:'5px', 
       margin:'0 5px 0 0', border:'1px solid black', color:'black', opacity:'1'}}
       onChange={categoryHandler} >
        <option value=''>{'상위 카테고리'}</option>
        <option value='아우터' selected={!isOuter}>{'아우터'}</option>
        <option value='상의' selected={!isTop}>{'상의'}</option>
        <option value='하의' selected={!isBottom}>{'하의'}</option>
        <option value='신발' selected={!isShoes}>{'신발'}</option>
      </select>
      <OuterChild display={isOuter} setSecondValue={setSecondValue}/>
      <TopChild display={isTop} setSecondValue={setSecondValue}/>
      <BottomChild display={isBottom} setSecondValue={setSecondValue}/>
      <ShoesChild display={isShoes} setSecondValue={setSecondValue}/>
    </>
  );
}

export default ParentCategory;
