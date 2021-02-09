import store from '../store';

export const useCount = () => {
  const [{ count }] = store.useStore();
  return count;
}

export const useIncrement = () => {
  // don't need to read state, destructure "_" to skip.
  const [_, setState ] = store.useStore();
  return () =>
    setState(old => ({
      ...old,
      count: old.count + 1
    }));
};

export const useAsyncIncrement = () => {
  // compose this hook out of the hook above
  const increment = useIncrement();
  // don't need the store here because useIncrement has it.

  return async () => {
    await new Promise(resolve => setTimeout(resolve, 1500));
    increment()
  }
};

export const useDecrement = () => {
  // use the store
  const { useStore } = store;
  // don't need to read state, destructure "_" to skip.
  const [_, setState ] = useStore();
  return () =>
    setState(old => ({
      ...old,
      count: old.count - 1
    }));
};
