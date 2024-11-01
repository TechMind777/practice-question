
// userReducer.js
const userReducer = (state = { user: null }, action) => {
  switch (action.type) {
    case 'SET_USER':
      return { ...state, user: action.payload };
    default:
      return state;
  }
};

export default userReducer;