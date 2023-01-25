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
    selectedCard,
    deck } = useContext(GameContext);


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
          player={'deck'}
        />
      </section>
      <section>
        {selectedCard && (
          <ExecutePassButton
          />
        )}
      </section>
    </div>
  );
}

export default App;
