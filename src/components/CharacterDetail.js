import React from 'react';

const CharacterDetail = ({ selectedCharater, onAddToFavorites, favorites }) => {
  const favorite = favorites.find(fav => fav.id === selectedCharater.id);
  return (
    <div className="character-detail">
      <img
        src={selectedCharater.image}
        className="character-detail__img"
        alt={selectedCharater.name}
      />
      <div className="character-detail__info">
        <h3 className="name">
          <span>👨</span>
          <span>
            {' '}{selectedCharater.name}
          </span>
        </h3>
        <div className="info">
          <span className="status " />
          <span>
            {' '}{selectedCharater.status}
          </span>
          <span>
            -{selectedCharater.species}
          </span>
        </div>
        <div className="location">
          <p>Last known location</p>
          <p>
            {selectedCharater.location.name}
          </p>
        </div>
        <div className="actions">
          {favorite?.id
            ? <p>Added To Your Favorite...✅</p>
            : <button
                className="btn btn--primary"
                onClick={() => onAddToFavorites(selectedCharater)}
              >
                Add to favorite
              </button>}
        </div>
      </div>
    </div>
  );
};

export default CharacterDetail;
