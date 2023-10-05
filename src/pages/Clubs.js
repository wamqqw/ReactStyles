import React from 'react';

const Clubs = (props) => {
  const club = props.club;

  return (
    <div className="club-info">
      <h1>{club.name}</h1>
      <p>City: {club.city}</p>
      <p>Founded: {club.foundationDate}</p>
      <img src={club.logo}/>
    </div>
  );
};

export default Clubs;