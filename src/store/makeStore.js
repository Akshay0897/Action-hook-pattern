import React, { createContext, useContext, useState, useMemo } from "react";

export default function makeStore() {
  // make context for the store
  const context = createContext();

  const Provider = ({ initialValue = {}, children }) => {
    // make a new state instance
    const [state, setState] = useState(initialValue);

    // Memoize the context value to update when state does
    const contextValue = useMemo(() => [state, setState], [state] );

    // Provide the store to children
    return <context.Provider value={contextValue}>{children}</context.Provider>;
  };

  // a hook to help us consume the store
  const useStore = () => useContext(context);

  return { Provider, useStore };
};
