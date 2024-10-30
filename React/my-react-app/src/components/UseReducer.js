import React, { useReducer } from "react";

function reducer2(state, action) {
    switch (action.type) {
      case 'ADD': return { count: state.count + 1 };
      case 'SUB': return { count: state.count - 1 };
      default: return state;
    }
}

function reducer(state, action) {
  if (action.type === "incremented_age") {
    return {
      age: state.age + 1,
    };
  }
  throw Error("Unknown action.");
}

function UseReducer() {
  const [state, dispatch] = useReducer(reducer, { age: 42 });
  const [state2, dispatch2] = React.useReducer(reducer2, { count: 0 });
  return (
    <>

      <button onClick={() => { dispatch({ type: "incremented_age" }); }} > Increment age </button>
      <p>Hello! You are {state.age}.</p>

      Count: {state2.count}
      <button onClick={() => dispatch2({type: 'ADD'})}>Add</button>
      <button onClick={() => dispatch2({type: 'SUB'})}>Substract</button>
   

    </>
  );
}

export default UseReducer;
