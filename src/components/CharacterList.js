import React from 'react';
import { BsEye, BsEyeSlash } from 'react-icons/bs';

const CharacterList = ({ characters, onSelectCharacter, selectedCharater }) => {
  return (
    <div>
      {characters.map(character =>
        <Character
          key={character.id}
          character={character}
          onSelectCharacter={onSelectCharacter}
          selectedCharater={selectedCharater}
        >
          <button
            className="icon red"
            onClick={() => onSelectCharacter(character)}
          >
            {selectedCharater?.id === character.id
              ? <BsEyeSlash className="icon" />
              : <BsEye className="icon" />}
          </button>
        </Character>
      )}
    </div>
  );
};

export default CharacterList;

export const Character = ({ character, selectedCharater, children }) => {
  return (
    <div
      className={`list__item ${selectedCharater?.id === character.id
        ? 'list__item--active'
        : ''}`}
    >
      <img src={character.image} alt={character.name} />
      <h3 className="name">
        <span>
          {character.gender === 'Male' ? '👨' : '👩'}{' '}
        </span>
        <span>
          {character.name}
        </span>
      </h3>
      <div className="list-item__info info">
        <span className="status" />
        <span>
          {character.status}
        </span>
        <span>
          -{character.species}
        </span>
      </div>
      {children}
    </div>
  );
};
