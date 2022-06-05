import { useEffect, useState } from "react";
import Button from "./Button";

const SeasonButton = () => {
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
  }
  const handleSummerColor = () => {
    setSummer(!onSummer);
  }
  const handleFallColor = () => {
    setFall(!onFall);
  }
  const handleWinterColor = () => {
    setWinter(!onWinter);
  }
  useEffect(() => {
    setSummerColor(onSummer ? 'skyblue' : '')
    setSpringColor(onSpring ? 'skyblue' : '')
    setFallColor(onFall ? 'skyblue' : '')
    setWinterColor(onWinter ? 'skyblue' : '')
  },[onSpring, onSummer, onFall, onWinter])
  
  return (
    <>
    <Button name={"봄"} value={'봄'} backgroundColor={springColor} onClick={handleSpringColor}/>
    <Button name={"여름"} value={'여름'} backgroundColor={summerColor} onClick={handleSummerColor} />
    <Button name={"가을"} value={'가을'} backgroundColor={fallColor} onClick={handleFallColor} />
    <Button name={"겨울"} value={'겨울'} backgroundColor={winterColor} onClick={handleWinterColor}/>
    </>
  );
}

export default SeasonButton;