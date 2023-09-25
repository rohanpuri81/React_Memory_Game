import React from "react";
import "./SingleCard.css";

const SingleCard = ({ keys, card, handleChoice, flipped }) => {
  const handleClick = () => {
    handleChoice(card);
  };
  return (
    <div className="card" key={keys}>
      <div className={flipped ? "flipped" : ""}>
        <img src={card.src} className="front" alt="cardFront" />
        <img
          src="/img/cover.png"
          className="back"
          onClick={handleClick}
          alt="cardBack"
        />
      </div>
    </div>
  );
};

export default SingleCard;
