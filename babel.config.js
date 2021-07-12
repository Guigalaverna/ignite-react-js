module.exports = {
  presets: [
    // Allows Babel to choose the best conversion option
    // according to the environment where it is being executed
    "@babel/preset-env",

    // Allows Babel to understand React syntax, JSX is not a file type
    // that the browser would understand, then this enables Babel to understand the syntax
    "@babel/preset-react",

    // Allowing use of typscript in the project
    "@babel/preset-typescript",
  ],
};
