module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
    "plugin:jest/recommended",
  ],
  plugins: ["import"],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  rules: {
    "no-console": "warn",
    "no-unused-vars": "off",
    "object-shorthand": "error",
    "@typescript-eslint/no-unused-vars": "error",
    "@typescript-eslint/no-explicit-any": ["error", { fixToUnknown: true }],
    "@typescript-eslint/explicit-function-return-type": [
      "error",
      { allowExpressions: true, allowTypedFunctionExpressions: true },
    ],
    "@typescript-eslint/no-object-literal-type-assertion": "off",
    "@typescript-eslint/no-inferrable-types": [
      "error",
      { ignoreParameters: true },
    ],
    "@typescript-eslint/camelcase": "off",
    "import/order": ["error"],
  },
  overrides: [
    {
      // Special config files
      files: ["*.js"],
      env: {
        node: true,
        browser: false,
      },
      parserOptions: {
        ecmaVersion: 3,
      },
      rules: {
        "@typescript-eslint/no-var-requires": "off",
      },
    },
    {
      files: ["*.test.ts"],
      plugins: ["jest"],
      env: {
        jest: true,
      },
    },
  ],
};
