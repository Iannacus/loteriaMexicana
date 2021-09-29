import './App.css';
import {useState, useEffect} from 'react';
import Card from './components/Card';
import cards from './data'

function App() {

  const [arrayIndex, setArrayIndex] = useState(0);
  const [arrayUsedIndex, setArrayUsedIndex] = useState(0);
  const [shuffleDeck, setShuffleDeck] = useState([]);
  const [usedCards, setUsedCards] = useState([]);
  const [showCards, setShowCards] = useState(false);
  const [showUsedCards, setShowUsedCards] = useState(false);


  const updateCard = () => {
    console.log('actualizando a: ', arrayIndex + 1);
    if(arrayIndex <= 52){
      setUsedCards([...usedCards, shuffleDeck[arrayIndex]]);
      setArrayIndex(Number(arrayIndex) + 1);
    }
    else
      setShowCards(false);
  }

  useEffect(() => {
    console.log(usedCards.length);
    if(usedCards.length > 0) {
      setShowUsedCards(true);
      setArrayUsedIndex(usedCards.length - 1);
    }
  }, [usedCards])

  const getRandom = (cardsRemaining) => {
    return Math.trunc(Math.random() * cardsRemaining - 1);
  }

  useEffect(() => {
    let shuffle = [];
    let copyCards = [...cards];
    for(let i=0; i<54; i++){
      console.log('agregando carta')
      shuffle.push(copyCards.splice(getRandom(copyCards.length), 1)[0]);
    }
    setShuffleDeck([...shuffle]);
  }, []);

  useEffect(() => {
    if(shuffleDeck.length >= 54) {
      console.log(shuffleDeck);
      setShowCards(true);
    }

  }, [shuffleDeck]);

  return (
    <div className="App">
      <div className="space">
        {showCards 
          ? <Card
              number={shuffleDeck[arrayIndex].number}
              name={shuffleDeck[arrayIndex].name} 
              next={updateCard}  
            /> 
          : null
        }
      </div>
      <div className="space">
        {showUsedCards 
          ? <Card
              number={usedCards[arrayUsedIndex].number}
              name={usedCards[arrayUsedIndex].name} 
              next={updateCard}
              used
            /> 
          : null
        } 
      </div>
            
    </div>
  );
}

export default App;
