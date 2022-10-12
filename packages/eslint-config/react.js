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
    "jsx-a11y/no-autofocus": "off",
    "react/display-name": "error",
    "react/no-unescaped-entities": ["error", { forbid: ["<", ">"] }],
    "react/prop-types": "off",
    "react/react-in-jsx-scope": "off",
    "react-hooks/exhaustive-deps": "error",
    "react-hooks/rules-of-hooks": "error",
  },
};
