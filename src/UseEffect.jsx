import { useEffect, useState } from "react";

function UseEffect() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("UseEffect Component");
  }, []);

  return (
    <>
      <h1>UseEffect Hook</h1>
      <h1>Counter : {count}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increase
      </button>
      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        Decrease
      </button>
    </>
  );
}

export default UseEffect;
