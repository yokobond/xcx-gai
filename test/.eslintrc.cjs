module.exports = {
  root: true,
  plugins: ["jest"],
  extends: ["plugin:jest/recommended"],
  env: {
    browser: true,
    es6: true,
    jest: true,
  },
  parserOptions: {
    sourceType: "module",
  },
};
