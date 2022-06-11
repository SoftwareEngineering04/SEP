import { useEffect, useState } from "react";
import Button from "./Button";

const SeasonButton = (props) => {
  const [onSpring,setSpring] = useState(false);
  const [onSummer,setSummer] = useState(false);
  const [onFall,setFall] = useState(false);
  const [onWinter,setWinter] = useState(false);
  const [springColor,setSpringColor] = useState('');
  const [summerColor,setSummerColor] = useState('');
  const [fallColor,setFallColor] = useState('');
  const [winterColor,setWinterColor] = useState('');
  const handleSpringColor = () => {
    setSpring(!onSpring)
    props.setSeason([...props.season, '봄'])
  }
  const handleSummerColor = () => {
    setSummer(!onSummer);
    props.setSeason([...props.season, '여름'])
  }
  const handleFallColor = () => {
    setFall(!onFall);
    props.setSeason([...props.season, '가을'])
  }
  const handleWinterColor = () => {
    setWinter(!onWinter);
    props.setSeason([...props.season, '겨울'])
  }
  const resetSeason = () => {
    props.setSeason([]);
    setSpring(false)
    setSummer(false);
    setFall(false);
    setWinter(false);
  }
  useEffect(() => {
    setSummerColor(onSummer ? 'skyblue' : '')
    setSpringColor(onSpring ? 'skyblue' : '')
    setFallColor(onFall ? 'skyblue' : '')
    setWinterColor(onWinter ? 'skyblue' : '')
  },[onSpring, onSummer, onFall, onWinter])
  
  return (
    <div style={{textAlign:'center', margin:props.margin}}>
    <Button name={"봄"} value={'봄'} backgroundColor={springColor} 
    onClick={handleSpringColor} width={props.width} height={props.height}
    margin={'0 5px 0 0'}/>
    <Button name={"여름"} value={'여름'} backgroundColor={summerColor} 
    onClick={handleSummerColor}  width={props.width} height={props.height}
    margin={'0 5px 0 0'}/>
    <Button name={"가을"} value={'가을'} backgroundColor={fallColor} 
    onClick={handleFallColor}  width={props.width} height={props.height}
    margin={'0 5px 0 0'}/>
    <Button name={"겨울"} value={'겨울'} backgroundColor={winterColor} 
    onClick={handleWinterColor}  width={props.width} height={props.height}
    margin={'0 5px 0 0'}/>
    <Button name={"초기화"} value={'초기화'} color={'red'}
    onClick={resetSeason}  width={props.width} height={props.height}/>
    </div>
  );
}

export default SeasonButton;