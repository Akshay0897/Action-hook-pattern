### This simple application demonstrates the compose-ability of React hooks by implementing:

1. Global State via `useContext()`
2. Custom Hook to increment a counter
3. Custom Hook to implement a text input

### Typically, you would initialize a state object in a class based component, then, you would write a handler function, like
```js

state = {
  values: {
    someKey: "someValue"
  }
}

// ...
onChangeText = (key, value) => {
  this.setState(state => ({
    values: {
      ...state.values,
      [key]: value
    }
  }));
};

// ...
<textarea
  value={text}
  onChange={e => {
    this.onChangeText("text", e.target.value);
  }}
/>
```

### The problem with this approach is that the <code>onChangeText()</code> logic would need to be repeated in every single component in which you wanted to implement a `<textarea />`.  

### With hooks, after setting up context/global store, we can access the global state and augment it with our custom hook by simply importing the hook into any component with a text area, like so:

```js

import React from "react";
import { Input } from "../styles";

import { useText, useChangeText } from "../state/input";

export default () => {

  // in order for useText to be reusable across various inputs, each
  // input will need a unique identifier (i.e. "alpha") so we know which key in the
  // global store object to retrieve.
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
```

## Pull the repo for yourself and give it a go!



# Everything below here is the boiler README.md
<hr />
<hr />

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
