import { useEffect, useRef, useState } from "react";

//useRef는 언제 유리할까?
export default function RefUsing() {
  const [count, setCount] = useState(1);
  // const [renderCount, setRenderCount] = useState(1);
  //   const renderCount = useRef(1);

  //무한루프
  // useEffect(() => {
  //   console.log("렌더링");
  //   setRenderCount(renderCount + 1);
  // });

  //   useEffect(() => {
  //     renderCount.current = renderCount.current + 1;
  //     console.log("렌더링 수", renderCount.current);
  //   });

  return (
    <>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>올리자</button>
    </>
  );
}
