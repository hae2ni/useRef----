import { useEffect, useRef, useState } from "react";

//useRef는 언제 유리할까?
export default function RefUsing() {
  const [count, setCount] = useState(1);
  // const [renderCount, setRenderCount] = useState(1);
  // const renderCount = useRef(0);

  // useEffect(() => {
  //   console.log("렌더링");
  //   setRenderCount(renderCount + 1);
  // });

  // useEffect(() => {
  //   console.log("렌더링 수", renderCount.current);
  //   renderCount.current = renderCount.current + 1;
  // });

  return (
    <>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>올리자</button>
    </>
  );
}
