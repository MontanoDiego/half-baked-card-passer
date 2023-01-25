const { createContext, useState } = require('react');


const GameContext = createContext();

const GameProvider = ({ children }) => {
  const [deck, setDeck] = useState([]);
  return <GameContext.Provider value={{ deck, setDeck }}>{children}</GameContext.Provider>;
};

export { GameContext, GameProvider };