import React from "react";
import { INCREMENT, DECREMENT } from "../actiontypes/actionTypes";
import { useDispatch, useSelector } from "react-redux";
const ComponentA = () => {
  const dispatch = useDispatch();
  const myState = useSelector((state) => state.reducerFun);
  return (
    <div>
      <h1>{myState}</h1>
      <button
        onClick={() => {
          dispatch({ type: INCREMENT });
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          dispatch({ type: DECREMENT });
        }}
      >
        Decrement
      </button>
    </div>
  );
};
export default ComponentA;
