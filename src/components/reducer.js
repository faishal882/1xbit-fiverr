export const initialState = {
  betcards: [],
};

export const getOddsTotal = (betcards) =>
  betcards?.reduce((totalOdd, item) => item.odds * totalOdd, 1);

const reducer = (state, action) => {
  // console.log(action);
  switch (action.type) {
    case "ADD_BETSLIP":
      let betcardExists = false;
      for (let i = 0; i < state.betcards.length; i++) {
        const element = state.betcards[i];
        if (action.item.id === element.id) {
          betcardExists = true;
          break;
        }
      }
      betcardExists || state.betcards.push(action.item);
      return {
        ...state,
        betcards: [...state.betcards],
      };

    case "REMOVE_BETSLIP":
      const newBetCards = state.betcards.filter((betcards) => {
        return betcards.id !== action.id;
      });
      return {
        ...state,
        betcards: newBetCards,
      };
    case "EMPTY_BETSLIP":
      return {
        ...state,
        betcards: [],
      };

    default:
      return state;
  }
};

export default reducer;
