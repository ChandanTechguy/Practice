import React, { useReducer } from "react";

const initialState = 0;
const reducer = (state, action) => {
  console.log(state,action)
  if (action.type === "INCREMENT") {
    return state + 1;
  }
  if (action.type === "DECREMENT") {
    return state - 1;
  }
  return state;
};
const UseReducer = () => {
  // const [count, setCount] = useState();

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <div>
        <p>{state}</p>
        <div className="btnStylePosition">
          <button onClick={() => dispatch({ type: "INCREMENT" })}>
            Increment
          </button>
          <button onClick={() => dispatch({ type: "DECREMENT" })}>
            Decrement
          </button>
        </div>
      </div>
    </>
  );
};

export default UseReducer;
