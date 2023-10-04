import { useEffect, useState } from 'react';
import './App.css';
import CharacterDetail from './components/CharacterDetail';
import CharacterEpisode from './components/CharacterEpisode';
import CharacterList from './components/CharacterList';
import Header from './components/Header';
import { allCharacters } from './data';

function App() {
  const [characters, setCharacters] = useState(allCharacters);
  const [selectedCharater, setSelectedCharater] = useState(null);
  const [query, setQuery] = useState('');
  const [filtered, setFiltered] = useState(characters);
  const [favorites, setFavorites] = useState(
    () => JSON.parse(localStorage.getItem('myFav')) || []
  );

  useEffect(
    () => {
      setFiltered(
        characters.filter(chr =>
          chr.name.toLowerCase().includes(query.toLowerCase())
        )
      );
    },
    [query]
  );
  useEffect(
    () => {
      localStorage.setItem('myFav', JSON.stringify(favorites));
    },
    [favorites]
  );

  //Handler
  const handleSelectCharacter = character => {
    setSelectedCharater(
      character.id === selectedCharater?.id ? null : character
    );
  };
  const handleAddToFavorites = favorite => {
    setFavorites(prevFav => [...prevFav, favorite]);
  };
  const handleRemoveFavorite = id => {
    setFavorites(prevFav => prevFav.filter(fav => fav.id !== id));
  };
  return (
    <div className="App">
      <header>
        <Header
          characters={filtered}
          query={query}
          setQuery={setQuery}
          favorites={favorites}
          onRemoveFavorite={handleRemoveFavorite}
        />
      </header>
      <main className="main">
        <CharacterList
          characters={filtered}
          onSelectCharacter={handleSelectCharacter}
          selectedCharater={selectedCharater}
        />
        {selectedCharater &&
          <div style={{ flex: '1 1 0%' }}>
            <CharacterDetail
              selectedCharater={selectedCharater}
              onAddToFavorites={handleAddToFavorites}
              favorites={favorites}
            />
            <CharacterEpisode />
          </div>}
      </main>
    </div>
  );
}

export default App;
