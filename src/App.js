import './App.css';
import Author from './components/Author';
import Quote from './components/Quote';
import {useState, useEffect} from 'react';

const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f'];

function App() {

  //Set quotes from the API
  const [quotes, setQuotes] = useState([]);
  
  useEffect(()=>{
    fetch('https://jsonblob.com/api/jsonblob/918261686465740800')
    .then(res=>res.json())
    .then(data=> setQuotes(data));
  },[]);

  //Function to Get a random hex color => ex: it could return '#123abc'
  const newColor = () => {
    let updatedColor = '#';
    for (let i = 0; i < 6; i++) {
      const aleatorio = 0 + Math.floor(Math.random()*hex.length);
      updatedColor+=hex[aleatorio];
    } 
    return updatedColor;
  }

  const [randomColor, setRandomColor] = useState(newColor());

  //Function to get a random number (that will be used as index) of our quotes json
  const randomQuote = () => 0 + Math.floor(Math.random()*quotes.length);

  //Set a random number to the state
  const [random, setRandom] = useState(randomQuote());

  //set the body random background
  document.body.style = `background: ${randomColor}`;

  //function to get a new random index and a new color. That will re-render the component so we'll see a new color in our page
  const changeAuthor = () => {
    setRandom(randomQuote);
    setRandomColor(newColor());
  };
  
  return (
    <div className="App">
      <Quote index={random} color={randomColor} />
      <Author index={random} color={randomColor} action={changeAuthor}/>
    </div>
  );
};

export default App;
