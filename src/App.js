import './App.css';
import initialCards from './cards-data';
import Player from './components/Player';
import CardList from './components/CardList';
import { useContext, useState } from 'react';
import ExecutePassButton from './components/ExecutePassButton';
import { GameContext } from './Context/GameContext.js';

function App() {
  const { playerOneHand, 
    playerTwoHand, 
    playerThreeHand, 
    passCard } = useContext(GameContext);

  const [deck, setDeck] = useState(initialCards);
  const [selectedCard, setSelectedCard] = useState();
  const [from, setFrom] = useState('deck');
  const [to, setTo] = useState(1);

  function findCardIndex(value, suit, cards) {
    return cards.findIndex((card) => card.value === value && card.suit === suit);
  }

  return (
    <div className="App">
      <section>
        {/* if the player names are numbers, that will make our life easier later because we can reuse numbers as arrays. Note that this will make our app brittle! */}
        <Player
          player={1}
          hand={playerOneHand}
        />
        <Player
          player={2}
          hand={playerTwoHand}
        />
        <Player
          player={3}
          hand={playerThreeHand}
        />
        <CardList
          cards={deck}
          selectedCard={selectedCard}
          setSelectedCard={setSelectedCard}
          setFrom={setFrom}
          player={'deck'}
        />
      </section>
      <section>
        {selectedCard && (
          <ExecutePassButton
            passCard={passCard}
            setFrom={setFrom}
            from={from}
            to={to}
            selectedCard={selectedCard}
            setSelectedCard={setSelectedCard}
          />
        )}
      </section>
    </div>
  );
}

export default App;
