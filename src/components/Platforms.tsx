import usePlatforms, { Platform } from '../hooks/usePlatforms';
import DropDown from './DropDown';

interface Props {
  onSelect: (platform: Platform) => void;
}

const Platforms = ({ onSelect }: Props) => {
  const { data } = usePlatforms();
  return <DropDown data={data} label='Platforms' onSelect={onSelect} />;
};

export default Platforms;
