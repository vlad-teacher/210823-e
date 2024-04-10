import { useState } from "react";

export const useCounter = (delta) => {
    const [counter, setCounter] = useState(0);

    const increment = () => {
      setCounter((prev) => prev + delta);
    };

    const decrement = () => {
      setCounter((prev) => prev - delta);
    };



    return {
        count: counter,
        inc: increment,
        dec: decrement
    };
};
