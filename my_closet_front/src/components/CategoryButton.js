import { useEffect, useState } from "react";
import Button from "./Button";

const CategoryButton = (props) => {
  const [onOuter,setOuter] = useState(false);
  const [onTop,setTop] = useState(false);
  const [onBottom,setBottom] = useState(false);
  const [onShoes,setShoes] = useState(false);
  const [outerColor,setOuterColor] = useState('');
  const [topColor,setTopColor] = useState('');
  const [bottomColor,setBottomColor] = useState('');
  const [shoesColor,setShoesColor] = useState('');

  const [count, setCount] = useState(0);
  const increaseCount = () => {
    setCount(count + 1);
  }
  if(count>1) {
    alert('계절별 카테고리는 최대 1개까지만 선택 가능합니다.');
    setCount(0)
    setOuter(false)
    setTop(false);
    setBottom(false);
    setShoes(false);
    props.setCategory([]);
  }
  const handleOuterColor = () => {
    setOuter(!onOuter)
    props.setCategory([...props.category, '아우터'])
  }
  const handleTopColor = () => {
    setTop(!onTop);
    props.setCategory([...props.category, '상의'])
  }
  const handleBottomColor = () => {
    setBottom(!onBottom);
    props.setCategory([...props.category, '하의'])
  }
  const handleShoesColor = () => {
    setShoes(!onShoes);
    props.setCategory([...props.category, '신발'])
  }
  const resetCategory = () => {
    props.setCategory([]);
    setOuter(false)
    setTop(false);
    setBottom(false);
    setShoes(false);
    setCount(0);
  }
  useEffect(() => {
    setOuterColor(onOuter ? 'skyblue' : '')
    setTopColor(onTop ? 'skyblue' : '')
    setBottomColor(onBottom ? 'skyblue' : '')
    setShoesColor(onShoes ? 'skyblue' : '')
  },[onOuter, onTop, onBottom, onShoes])
  
  return (
    <div style={{textAlign:'center', margin:props.margin}}>
    <Button name={"아우터"} value={'아우터'}backgroundColor={outerColor}
    onClick={() => {handleOuterColor(); increaseCount();}} width={props.width} 
    height={props.height} margin={'0 5px 5px 0'}/>

    <Button name={"상의"} value={'상의'} backgroundColor={topColor} 
    onClick={() => {handleTopColor(); increaseCount();}}  width={props.width} 
    height={props.height} margin={'0 5px 5px 0'}/>

    <Button name={"하의"} value={'하의'} backgroundColor={bottomColor} 
    onClick={() => {handleBottomColor(); increaseCount();}}  width={props.width} 
    height={props.height} margin={'0 5px 0 0'}/>

    <Button name={"신발"} value={'신발'} backgroundColor={shoesColor} 
    onClick={() => {handleShoesColor(); increaseCount();}}  width={props.width}
    height={props.height} margin={'0 5px 5px 0'}/>

    <Button name={"초기화"} value={'초기화'} color={'red'}
    onClick={resetCategory}  width={props.width} height={props.height}/>
    </div>
  );
}

export default CategoryButton;