import logo from './fishtank.jpg';
import './App.css';

function App() {
  const requestOptions = {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': '*',
    },
    body: JSON.stringify({name: "Apples", color: 'red'})
  };
  const fruit = () => {
    fetch('https://4j6jpt6px8.execute-api.us-east-1.amazonaws.com/helloworld', requestOptions)
        .then(response => response.json())
        .then((json) => {
          console.log(json);
        })
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello Angel
        </p>
        <button onClick={fruit}>Fruit</button>
      </header>
    </div>
  );
}

export default App;
