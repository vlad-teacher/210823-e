import React from "react";
import { useCounter } from "./useCounter";

export const CounterEggs = () => {
  const { count, inc, dec } = useCounter(10);

  return (
    <div>
      <button onClick={dec}>-</button>
      <div>{count}</div>
      <button onClick={inc}>+</button>
    </div>
  );
};
