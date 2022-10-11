module.exports = {
  plugins: ["react", "react-hooks", "jsx-a11y"],
  extends: [
    "@lucaspickering",
    "plugin:react/recommended",
    "plugin:prettier/recommended",
    "plugin:jsx-a11y/recommended",
  ],
  settings: {
    react: {
      pragma: "React",
      version: "detect",
    },
  },
  rules: {
    "react/prop-types": "off",
    "react/react-in-jsx-scope": "off",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "error",
    "react/display-name": "error",
    "jsx-a11y/no-autofocus": "off",
  },
};
