const initialState = {
  randomMessage: "",
};
const messageReducer = async (state = initialState, action) => {
  if (action.type === "message/fetchMessage") {
    const newState = { ...state, randomMessage: action.payload };
    return newState;
  } else {
    return state;
  }
};

export default messageReducer;
