import React, { useState } from 'react';
import Modal from './Modal';
import { Character } from './CharacterList';
import { BsTrash } from 'react-icons/bs';

const Header = ({
  characters,
  query,
  setQuery,
  favorites,
  onRemoveFavorite
}) => {
  const [isShowModal, setIsShowModal] = useState(false);
  return (
    <nav className="navbar">
      <div className="navbar__logo">Logo😍</div>
      <input
        type="text"
        className="text-field"
        placeholder="Search..."
        value={query}
        onChange={e => setQuery(e.target.value)}
      />

      <div className="navbar__result">
        Found {characters.length} Characters
      </div>
      <div>
        <button className="heart" onClick={() => setIsShowModal(true)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            aria-hidden="true"
            className="icon"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
            />
          </svg>
          <span className="badge">
            {favorites.length}
          </span>
        </button>
        {isShowModal &&
          <Modal setIsShowModal={setIsShowModal}>
            {favorites.map(favorite =>
              <Character character={favorite} key={favorite.id}>
                <button
                  className="icon red"
                  onClick={() => onRemoveFavorite(favorite.id)}
                >
                  <BsTrash className="icon red" />
                </button>
              </Character>
            )}
          </Modal>}
      </div>
    </nav>
  );
};

export default Header;
