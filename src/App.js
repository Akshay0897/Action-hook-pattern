import React from "react";
import Counter from "./comps/Counter";
import TextInput from "./comps/TextInput";
import { Container } from "./styles";

import store from "./store";

const initialState = {
  count: 0,
  alpha: "initial text"
};

export default () => {
  const { Provider } = store;
  return (
    <Provider initialValue={initialState}>
      <Container>
        <Counter />
        <TextInput />
      </Container>
    </Provider>
  );
};
