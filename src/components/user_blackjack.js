import React from 'react'

const UserBlackjack = (props) => {
  return(
    <div>
      <h1>Player1</h1>
      <h2>Score: {props.score()}</h2>
      <ul>
        {props.userCards.map(({name,value})=> <li>{name}</li>)}
      </ul>
    </div>
  );
}

export default UserBlackjack;
