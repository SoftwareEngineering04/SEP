import './App.css';
import React, {useEffect, useState} from 'react';
import axios from 'axios';

function App() {
  const [hello, setHello] = useState('');

  function callback(str){
      setHello(str);
  }

  useEffect(() => {
    axios.get('/api/hello')
        .then((response) => {
            callback(response.data)})
        .catch((error) => console.log(error))
  }, []);



  return (
      <div className="App">
          <header className="App-header">
              {hello}
          </header>
      </div>
  );
}


export default App;
