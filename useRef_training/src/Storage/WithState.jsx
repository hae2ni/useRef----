import { useRef, useState } from "react";

//state와 ref의 비교
export default function WithState() {
  const [count, setCount] = useState(0);

  console.log("렌더링");

  function handleIncreaseState() {
    setCount(count + 1);
  }

  return (
    <>
      <p>State: {count}</p>
      {/* <p>Ref: {countRef.current}</p> */}
      <button onClick={handleIncreaseState}>+해보쟈요!+</button>
      {/* <button onClick={handleIncreaseRef}>ref키워보쟈!</button> */}
    </>
  );
}
