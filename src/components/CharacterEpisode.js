import React, { useState } from 'react';
import { episodes } from '../data';

const CharacterEpisode = () => {
  const [allEpisodes, setAllEpisodes] = useState(episodes);
  const [isChanged, setIsChanged] = useState(false);
  let sorted = allEpisodes;

  const handleSorted = () => {
    setIsChanged(is => !is);
  };

  if (isChanged) {
    sorted = allEpisodes.sort(
      (a, b) => new Date(b.air_date) - new Date(a.air_date)
    );
  } else {
    sorted = allEpisodes.sort(
      (a, b) => new Date(a.air_date) - new Date(b.air_date)
    );
  }

  return (
    <div className="character-episodes">
      <div className="title">
        <h2>List of episodes:</h2>
        <button onClick={handleSorted}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            aria-hidden="true"
            className="icon"
            style={{ rotate: `${isChanged ? '180deg' : '0deg'}` }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 11.25l-3-3m0 0l-3 3m3-3v7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </button>
      </div>

      <ul>
        {sorted.map(episode => <Episode key={episode.id} episode={episode} />)}
      </ul>
    </div>
  );
};

export default CharacterEpisode;

const Episode = ({ episode }) => {
  return (
    <li>
      <div>
        {String(episode.id).padStart(2, 0)}-{episode.episode}:<strong> {episode.name}</strong>
      </div>
      <div className="badge badge--secondary">
        {episode.air_date}
      </div>
    </li>
  );
};
