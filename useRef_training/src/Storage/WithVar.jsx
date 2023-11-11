import { useRef, useState } from "react";

//ref와 변수와의 비교
function WithVar() {
  //   const [renderer, setRenderer] = useState(0);
  const countRef = useRef(0);
  let countVar = 0;

  function handleIncreaseRef() {
    countRef.current = countRef.current + 1;
    console.log("ref", countRef.current);
  }
  function handleIncreaseVar() {
    countVar = countVar + 1;
    console.log("var", countVar);
  }

  //   function handleRendering() {
  //     setRenderer(renderer + 1);
  //   }

  //   function printResults() {
  //     console.log(`ref: ${countRef.current}`, `var: ${countVar}`);
  //   }

  return (
    <>
      <p>Ref: {countRef.current}</p>
      <p>Var: {countVar}</p>
      {/* <button onClick={handleRendering}>렌더</button> */}
      <button onClick={handleIncreaseRef}>Ref ++</button>
      <button onClick={handleIncreaseVar}>Var ++</button>
      {/* <button onClick={printResults}>Ref, Var 값 출력</button> */}
    </>
  );
}

export default WithVar;
