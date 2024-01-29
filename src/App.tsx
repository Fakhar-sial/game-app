import { useState } from 'react';
import './App.css';
import GameChart from './components/GameChart';
import { Genre } from './hooks/useGenres';
import Genres from './components/Genres';
import Platforms from './components/Platforms';
import { Platform } from './hooks/usePlatforms';

function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(
    null
  );

  return (
    <div className='container'>
      {/* Head */}
      <div className='head'></div>
      {/* Nav Bar */}

      {/* Game Grid */}

      <div className='game-container'>
        <div>
          <Genres onSelect={genre => setSelectedGenre(genre)} />
          <Platforms onSelect={platform => setSelectedPlatform(platform)} />
        </div>
        <div className='game-chart'>
          <GameChart
            selectedGenre={selectedGenre}
            selectedPlatform={selectedPlatform}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
