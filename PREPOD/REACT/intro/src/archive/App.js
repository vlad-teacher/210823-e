import React, { useState } from "react";
import { Counter } from "./Counter";
import { CounterEggs } from "./CounterEggs";
import { CounterMeters } from "./CounterMeters";

// 1. Render parent
// 2. State change
// 3. Props change
// 4. Context change
// 5. Force rerender

export const App = () => {
  const [user, setUser] = useState({ age: 23, name: "Valerchik" });
  const [isShown, setIsShown] = useState(true);

  const changeUser = () => {
    setUser({ ...user });
  };

  // const toggleShow = () => {
  //   setIsShown(prevShown => !prevShown)
  // };


  return (
    <>
      {/* <button onClick={toggleShow}>toggle show</button> */}
      <Counter/>
      <CounterEggs/>
      <CounterMeters/>
    </>
  );
};






