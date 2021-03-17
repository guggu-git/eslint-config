module.exports = {
  parser: "babel-eslint",
  extends: ["airbnb", "airbnb/hooks", "prettier"],
  rules: {
    "jsx-a11y/label-has-for": 0, // deprecated but airbnb has this rule :(
    "react/jsx-filename-extension": 0,
    "import/prefer-default-export": 0,
    "padding-line-between-statements": [
      2,
      { blankLine: "always", prev: "*", next: "return" },
      { blankLine: "always", prev: ["const", "let", "var"], next: "*" },
      {
        blankLine: "any",
        prev: ["const", "let", "var"],
        next: ["const", "let", "var"],
      },
    ],
    "no-multiple-empty-lines": [2, { max: 1, maxBOF: 1 }],
    "vars-on-top": 2,
  },
};
