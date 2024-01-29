import useGames from '../hooks/useGames';
import { Genre } from '../hooks/useGenres';
import { Platform } from '../hooks/usePlatforms';
import GameCard from './GameCard';

interface Props {
  selectedGenre: Genre | null;
  selectedPlatform: Platform | null;
}

const GameChart = ({ selectedGenre, selectedPlatform }: Props) => {
  const { data, error } = useGames(selectedGenre, selectedPlatform);
  return (
    <>
      {error && <h2>{error}</h2>}
      {data.map(e => (
        <GameCard key={e.id} game={e} />
      ))}
    </>
  );
};

export default GameChart;
