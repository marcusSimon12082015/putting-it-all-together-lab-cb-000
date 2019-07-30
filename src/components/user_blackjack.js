import React from 'react'

const UserBlackjack = (props) => {

  const hitMe = (e,props) => {
    event.preventDefault();
    props.hitMe("user");
  }

  const stay = (e,props) => {
    event.preventDefault();
    props.stay();
  }

  return(
    <div>
     <h1>Player1</h1>
     <h2>Score: {props.score()}</h2>
     <ul>
       {props.userCards.map(({name,value})=> <li>{name}</li>)}
     </ul>
     <form onSubmit={hitMe(props)}>
       <button type="submit"> Hit Me </button>
     </form>
     <form onSubmit={stay(props)}>
       <button type="submit"> Stay </button>
     </form>
   </div>
  );
}

export default UserBlackjack;
