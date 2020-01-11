# **Vinny's React Tetris**

## **Overview**
React Tetris uses ES6 JavaScipt and React.js 16.8 to design an interactive tile-stacking mini game. It showcases:
1. **React Hooks** - React doesn’t offer a way to “attach” reusable behavior to a component. We sometimes find ourselves in a “wrapper hell” of components surrounded by layers of providers, consumers, higher-order components, render props, and other abstractions. Hooks allow you to reuse stateful logic without changing your component hierarchy. It also allows you to use these features in functional components rather than defining full React components (class <ClassName> extends React.Components).
2. **JavaScript ES6** - Tetris manipulates ES6's big arrow functions, using closure and callbacks to form a logical, yet simple, inheritance chain with different components handling different game logic.

Although I've worked with JavaScript and React/Redux for years, I built this game to showcase my commitment to staying up to date with their latest features. This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
Motivations/Guidance was provided via Weibencalk's tutorial on https://freecodecamp.org and W3Schools.

<!-- ![Sample]() -->

***


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

