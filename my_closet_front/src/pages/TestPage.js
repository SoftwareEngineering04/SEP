import Button from "../components/Button";
import Header from "../components/Header";

const TestPage = () => {
  const obj = [
    {name : 'a', addr : 'aa'},
    {name : 'b', addr : 'bb'},
    {name : 'c', addr : 'cc'},
    {name : 'd', addr : 'dd'},
    {name : 'a', addr : 'aa'},
    {name : 'b', addr : 'bb'},
    {name : 'c', addr : 'cc'},
    {name : 'd', addr : 'dd'},
    {name : 'a', addr : 'aa'},
    {name : 'b', addr : 'bb'},
    {name : 'c', addr : 'cc'},
    {name : 'd', addr : 'dd'},
    {name : 'a', addr : 'aa'},
    {name : 'b', addr : 'bb'},
    {name : 'c', addr : 'cc'},
    {name : 'd', addr : 'dd'},
    ]
  
  return (
  <>
  <Header />
  <div style={{border:'1px solid blue', width:'400px',
              textAlign:'center', margin:'5px auto'}}>
    {obj && obj.map((a) => (
      <div style={{
        border : '1px solid red',
        display:'inline-block',
        margin : '5px 7px'
        }}>
        <div style={{display:'block', margin:'0px auto', 
        textAlign:'center', padding:'5px'}}>
          <img alt='img' src={require('../images/addIcon.png')} 
          style={{width:'100px', height:'100px',
          border:'1px solid black'}}/>
          <p>name : {a.name}</p>
          <p>addr : {a.addr}</p>
          <Button value={'상세보기'}  width={'70px'} height={'25px'} />
        </div>
      </div>
    ))}
  </div>
  </>);
}

export default TestPage;