export function fetchDeck(){
  return {
    type: 'FETCH_DECK'
  }
}

export function setAICards(state){
    let cloneObject = JSON.parse(JSON.stringify(state));
    while(cloneObject.aiCards.length < 2){
      let randomIndex = Math.floor(Math.random() * cloneObject.deck.length);
      cloneObject.aiCards.push(cloneObject.deck[randomIndex]);
      cloneObject.deck.splice(randomIndex,1);
    }

  return {
    type: 'SET_AI_CARDS',
    payload:cloneObject
  }
}

export function setUserCards(state){
    let cloneObject = JSON.parse(JSON.stringify(state));
    while(cloneObject.userCards.length < 2){
      let randomIndex = Math.floor(Math.random() * cloneObject.deck.length);
      cloneObject.userCards.push(cloneObject.deck[randomIndex]);
      cloneObject.deck.splice(randomIndex,1);
    }

  return {
    type: 'SET_USER_CARDS',
    payload:cloneObject
  }
}
