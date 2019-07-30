import React from 'react'
import AIBlackjack from './ai_blackjack.js'
import UserBlackjack from './user_blackjack.js'

export default class App extends React.Component{
  constructor(props){
      super(props);
      this.hitMe = this.hitMe.bind(this);
      this.calculateAiScore = this.calculateAiScore.bind(this);
      this.calculateUserScore = this.calculateUserScore.bind(this);
      this.stay = this.stay.bind(this);
  }

  hitMe(){}

  calculateAiScore(){
    return this.props.store.getState().aiCards.reduce((sum,card) => {return sum + card.value},0);
  }

  calculateUserScore(){
    return this.props.store.getState().userCards.reduce((sum,card) => {return sum + card.value},0);
  }

  stay(){}


  render(){
    return(<div>
      <UserBlackjack userCards={this.props.store.getState().userCards} score={this.calculateUserScore}/>
      <AIBlackjack aiCards={this.props.store.getState().aiCards} score={this.calculateAiScore}/>
      </div>)
  }
}
