import WithState from "./Storage/WithState";
import WithVar from "./Storage/WithVar";
import RefUsing from "./Storage/RefUsing";
import Login from "./DOM/Login";

export default function App() {
  return (
    <>
      <WithState />
      <WithVar />
      <RefUsing />
      <Login />
    </>
  );
}
