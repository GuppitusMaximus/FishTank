import logo from './logo.svg';
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
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={fruit}>Fruit</button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
