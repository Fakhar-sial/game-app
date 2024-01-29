import useGenres from '../hooks/useGenres';
import DropDown from './DropDown';
import { Genre } from '../hooks/useGenres';

interface Props {
  onSelect: (genre: Genre) => void;
}

const Genres = ({ onSelect }: Props) => {
  const { data } = useGenres();
  return <DropDown data={data} label='Genres' onSelect={onSelect} />;
};

export default Genres;
