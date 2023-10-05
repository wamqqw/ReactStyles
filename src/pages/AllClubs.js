import React from 'react';
import Clubs from './Clubs';

const clubsData = [
    {
      name: 'BARCELONA',
      city: 'Barcelona',
      foundationDate: '	29 November 1899; 123 years agoas Foot-Ball Club Barcelona',
      logo: 'Barcelona.png',
    },
    {
      name: 'MANCHESTER UNITED',
      city: 'Manchester',
      foundationDate: '	1878; 145 years ago, as Newton Heath LYR F.C.24 April 1902; 121 years ago, as Manchester United F.C.',
      logo: 'MU.png',
    },
];

const AllClubs = () => {
  return (
    <div className="App">
    {clubsData.map((club) => (
      <Clubs club={club} />
    ))}
  </div>
  );
};

export default AllClubs;