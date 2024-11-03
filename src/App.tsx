import React, { useState, useEffect} from 'react';
import './App.css';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchData = async () =>{
      const response = await fetch('https://al3fbe8b17.execute-api.ap-northeast-2.amazonaws.com/Prod/hello');
      const data = await response.json();
      console.log(data);
      setMessage(data.message);
    };
    fetchData();
  }, []);

  return (
    <div className="App">
      <div className="container">
        <div className="message">{message} - dev</div>
      </div>
    </div>
  );
}

export default App;
