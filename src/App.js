import './App.css';
import Author from './components/Author';
import Quote from './components/Quote';
import quotes from './quotes.json';
import {useState} from 'react';


const colors = ['#7FB5FF', '#006E7F', '#B22727', '#AB46D2', '#446A46', '#55D8C1', '#FF6FB5', '#532E1C',
'#1EE494', '#616EEF', '#064ACB', '#481380', '#8BFFFF', '#FFBD35', '#26BAEE', '#081F37', '#D5441C', '#28FFBF'];

function App() {

  let firstRandom = 0 + Math.floor(Math.random()*quotes.length);
  const [random, setRandom] = useState(firstRandom);

  let firstColor = 0 + Math.floor(Math.random()*colors.length);
  const [color, setColor] = useState(colors[firstColor]);
  document.body.style = `background: ${color}`;

  const changeAuthor = () => {
    firstRandom = 0 + Math.floor(Math.random()*quotes.length);
    setRandom(firstRandom);
    firstColor = 0 + Math.floor(Math.random()*colors.length);
    setColor(colors[firstColor]);
    document.body.style = `background: ${color}`;
  };

  return (
    <div className="App">
      <Quote index={random} color={color} />
      <Author index={random} color={color} action={changeAuthor}/>
    </div>
  );
};

export default App;
