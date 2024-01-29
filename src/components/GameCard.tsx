import { Game } from '../hooks/useGames';

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  function cropImage(url: string) {
    const parts = url.split('/media/');
    if (parts.length === 2) {
      return `${parts[0]}/media/crop/600/400/${parts[1]}`;
    } else {
      console.error('Invalid image URL format:');
    }
  }
  return (
    <div className='card'>
      <img
        src={cropImage(game.background_image)}
        alt=''
        className='card-image'
      />
      <h1>{game.name}</h1>
    </div>
  );
};

export default GameCard;
