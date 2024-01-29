import { useState } from 'react';

interface Genre {
  id: number;
  name: string;
}

interface Props {
  label: string;
  data: any[];
  onSelect: (any: any) => void;
}

const DropDown = ({ data, label, onSelect }: Props) => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleOptionClick = () => {
    setMenuOpen(false);
  };

  return (
    <div className='dropdown'>
      <div className='dropdown-header' onClick={() => setMenuOpen(!isMenuOpen)}>
        {label}
      </div>
      {isMenuOpen && (
        <ul className='dropdown-list'>
          {data.map(option => (
            <li
              key={option.id}
              onClick={() => {
                handleOptionClick();
                onSelect(option);
              }}
            >
              {option.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DropDown;
