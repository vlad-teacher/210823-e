import React from "react";
import { Input } from "../Input";
import { Button } from "../Button";

export const TodoUserInput = ({onInputTextChange, inputValue, buttonOkClick}) => {

  return (
    <div>
      <Input onChange={onInputTextChange} value={inputValue}/>
      <Button onClick={buttonOkClick} />
    </div>
  );
};
