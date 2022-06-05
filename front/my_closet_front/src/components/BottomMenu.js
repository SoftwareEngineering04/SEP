import Button from "./Button";
import {Link} from 'react-router-dom';

const BottomMenu = () => {
  return (
    <>
    <Link to='/main'>
    <Button backgroundColor={'white'}
    value={'home'} /></Link>
    <Link to='/search'>
    <Button backgroundColor={'white'}
    value={'search'} /></Link>
    <Link to='/addcloth'>
    <Button backgroundColor={'white'}
    value={'add'} /></Link>
    <Link to='/favorite'>
    <Button backgroundColor={'white'}
    value={'favorite'} /></Link>
    <Link to='/myinfo'>
    <Button backgroundColor={'white'}
    value={'info'} /></Link>
    </>
  );
}

export default BottomMenu;