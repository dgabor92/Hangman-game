import React from "react";

const WrongLetters = ({ wrongLetters }) => {
  return (
    // show the user the wrong letters what already used
    <div classNames="wrong-letters-container">
      <div>
        {wrongLetters.length > 0 && <p>Wrong</p>}
        {wrongLetters
          .map((letter, i) => <span key={i}>{letter}</span>)
          .reduce(
            (prev, curr) => (prev == null ? [curr] : [prev, ",", curr]),
            null
          )}
      </div>
    </div>
  );
};

export default WrongLetters;
