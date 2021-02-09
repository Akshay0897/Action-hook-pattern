import React from "react";
import { Input } from "../styles";

import { useText, useChangeText } from "../state/input";

export default () => {

  // in order for useText to be reusable across various inputs, each
  // input will need a unique identifier (i.e. "alpha") so we know which key in the
  // global store object to retreive.
  const text = useText("alpha");
  // likewise, change text needs a key value (i.e "alpha") to know which
  // value of the state to set. 
  const changeText = useChangeText();

  console.log('TextInput, text = ', text, '\n' )

  return (
      <Input
        onChange={(e) => {
          console.log('e.target.value = ', e.target.value, '\n' )
          changeText("alpha", e.target.value)}}
        value={text}
        type="text"
      />
  );
};
