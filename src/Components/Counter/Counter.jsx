import { useState } from "react";
import "./Counter.css";
const Counter = () => {
  const [showCount, setShowCount] = useState(false);
  const [count, setCount] = useState(0);
  return (
    <div className="conatiner">
      <h1>Counter App</h1>
      <button onClick={() => setShowCount(!showCount)}>
        {showCount ? "Hide Count" : "Show Count"}
      </button>

      {showCount ? (
        <div className="display-count">
          <h2>
            Count <span>{count}</span>
          </h2>
          <div className="btns">
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button
              onClick={() => setCount(count > 0 ? count - 1 : 0)}
              disabled={count === 0}
            >
              Decrement
            </button>
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Counter;
