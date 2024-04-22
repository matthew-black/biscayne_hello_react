# Hello React

## Why Does React Exist?

* Compartmentalize!
    * Components!
* Facebook's engineering team invented it to make it easier to make Facebook.


## Structure of a React App:

* Top level is still `index.html`!
    * It's basically an empty box where React will render stuff.
* `main.jsx` is where we use JS to select the `<div id="root">` element, then render our React app inside of it.
* `App.jsx` is our React app! It's the top level component.

## Transpiling

* A React app uses JSX, which cannot be directly rendered by a browser.
    * Browser only can read HTML|JS|CSS.
* JSX needs to be "translated" or "compiled" into HTML|JS|CSS.
    * Hence, "transpiled."
* The reason you must run your React app on a localhost port is because of this.
    * Every time you modify and save a file in your React app, Vite (or whatever build tool you're using) re-transpiles your app.
