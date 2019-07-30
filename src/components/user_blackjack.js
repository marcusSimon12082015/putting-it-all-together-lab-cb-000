import React from 'react'

const UserBlackjack = (props) => {
  return(
    <div>
     <h1>Player1</h1>
     <h2>Score: {props.score()}</h2>
     <ul>
       {props.userCards.map(({name,value})=> <li>{name}</li>)}
     </ul>
     <form onSubmit={this.hitMe}>
       <button type="submit"> Hit Me </button>
     </form>
     <form onSubmit={this.stay}>
       <button type="submit"> Stay </button>
     </form>
   </div>
  );
}

const hitMe = (event,props) => {
  event.preventDefault();
  props.hitMe("user");
}

const stay = (event,props) => {
  event.preventDefault();
  props.stay();
}

export default UserBlackjack;
