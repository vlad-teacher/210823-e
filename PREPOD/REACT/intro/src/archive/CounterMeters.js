import React from "react";
import { useCounter } from "./useCounter";

export const CounterMeters = () => {
    const {inc, dec, count} = useCounter(1000);

  return (
      <div>
       <button onClick={dec}>-</button>
       <div>{count}</div>
       <button onClick={inc}>+</button>
     </div>
  );
};
