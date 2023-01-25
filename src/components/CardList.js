import React, { useContext } from 'react';
import { GameContext } from '../Context/GameContext.js';
import Card from './Card';

export default function CardList({ cards, player }) {
  return (
    <div className="card-list">
      {cards.map((card) => (
        <Card
          key={card.suit + card.value} // this stays
          player={player} // this stays
          card={card} // this stays
        />
      ))}
    </div>
  );
}
