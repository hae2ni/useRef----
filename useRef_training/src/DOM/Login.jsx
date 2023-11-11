import { useEffect, useRef } from "react";

export default function Login() {
  const inputRef = useRef();

  //   useEffect(() => {
  //     console.log(inputRef);

  //     inputRef.current.focus();
  //   }, []);

  //   function handleLogin() {
  //     alert(`환영합니다 ${inputRef.current.value}`);
  //     inputRef.current.focus();
  //   }

  return (
    <div>
      <input ref={inputRef} type="text" placeholder="username" />
      {/* <button onClick={handleLogin}>로그인</button> */}
    </div>
  );
}
