import Button from "./Button";
import {Link} from 'react-router-dom';

const BottomMenu = () => {
  return ( //text로 되어있는 버튼 아이콘으로 바꿔야함
    <div style={{
      position:'fixed',
      bottom:0,
      width:'100%',
      height:'50px',
      display:'inline',
      textAlign:'center'
    }}>
    <Link to='/main'>
    <Button backgroundColor={'#e9e9e9'}
    value={'home'} width={'50px'} height={'50px'}/></Link>
    <Link to='/search'>
    <Button backgroundColor={'#e9e9e9'}
    value={'search'} width={'50px'} height={'50px'}/></Link>
    <Link to='/addcloth'>
    <Button backgroundColor={'#e9e9e9'}
    value={'add'} width={'50px'} height={'50px'}/></Link>
    <Link to='/favorite'>
    <Button backgroundColor={'#e9e9e9'}
    value={'favorite'} width={'50px'} height={'50px'}/></Link>
    <Link to='/myinfo'>
    <Button backgroundColor={'#e9e9e9'}
    value={'info'} width={'50px'} height={'50px'}/></Link>
    </div>
  );
}

export default BottomMenu;