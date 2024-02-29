import { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  const sumar = () => {
    setCounter(counter + 1);
  };
  const restar = () => {
    setCounter(counter - 1);
  };

  return (
    <div>
      <h4>{counter}</h4>
    </div>
  );
};

export default Counter;
