import Button from './Button';

function App() {
  return (
    <div>
      <h1 style={{
        border : "lighter",
        color : "darkblue"
      }}>My Closet</h1>
      <Button 
      value={"들어가기"} 
      fontSize={"20px"}
      color={"rgba(52, 152, 219, 0.28)"}/>
    </div>
  );
}

export default App;
