import store from '../store';

export const useText = (key) => {
  const [ state ] = store.useStore();
  const text = state[key]
  console.log('useText text = ', text, '\n' )
  return text;
}

export const useChangeText = (key, value) => {
  // don't need to read state, destructure "_" to skip.
  const [_, setState ] = store.useStore();
  return (key, value) =>
    setState(old => ({
      ...old,
      [key]: value
    }));
};

// version with unnecessary console.log() to inspect value
// export const useChangeText = (value) => {
//   // don't need to read state, destructure "_" to skip.
//   const [_, setState ] = store.useStore();
//   return (value) => {
//     console.log('useChangeText value 2 = ', value, '\n' )
//     return setState(old => ({
//       ...old,
//       text: value
//     }));}
// };
