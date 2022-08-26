import { useDispatch, useSelector } from "react-redux";
import { incrementAction, decrementAction } from "./counterSlice";

const Counter = () => {
  const dispatch = useDispatch();
  const value = useSelector((state) => state.counter.value);

  return (
    <>
      <div>Value: {value}</div>
      <button onClick={() => dispatch(incrementAction())} >Increment</button>
      <button onClick={() => dispatch(decrementAction())}>Decrement</button>
    </>
  );
};

export default Counter;
