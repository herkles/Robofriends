import React from 'react';

const Card = () => {
  return (
    <div className='bg-light-green dib br3 pa3 ma2 grow'>
      <img alt='robots' src='https://robohash.org/Odin' />
      <div>
        <h2>Jane Doe</h2>
        <p>JaneDoe@gmail.com</p>
      </div>
    </div>
  );
}

export default Card;