import WithState from "./Storage/WithState";
// import WithVar from "./Storage/WithVar";
// import RefUsing from "./Storage/RefUsing";
// import Login from "./DOM/Login";
import { useRef } from "react";

export default function App() {
  const ref = useRef(0);

  console.log(ref);
  return (
    <>
      <WithState />
      {/* <WithVar />
      <RefUsing />
      <Login /> */}
    </>
  );
}
