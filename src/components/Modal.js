import React from 'react';

const Modal = ({ setIsShowModal, children }) => {
  return (
    <div>
      <div className="backdrop" onClick={() => setIsShowModal(false)} />
      <div className="modal">
        <div className="modal__header">
          <h2 className="title">Your Favorite Characters</h2>
          <button onClick={() => setIsShowModal(false)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              aria-hidden="true"
              className="icon close"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </button>
        </div>
        {children}
      </div>
    </div>
  );
};

export default Modal;
