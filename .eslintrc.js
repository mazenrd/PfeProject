module.exports = {
  root: true,
  extends: [
    "@react-native-community",
    "eslint:recommended",
    "plugin:react/recommended",
  ],
  plugins: ["react", "react-hooks", "import"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "off",
    "react/jsx-uses-react": "error",
    "react/jsx-uses-vars": "error",
    "no-unused-vars": [
      "error",
      { vars: "all", args: "after-used", ignoreRestSiblings: false },
    ],
    "no-console": ["warn"],
    indent: ["warn", 2, { SwitchCase: 1 }],
    quotes: ["warn", "double"],
    semi: ["warn"],
    "import/order": [
      "error",
      {
        alphabetize: {
          order: "asc",
          caseInsensitive: true,
        },
        "newlines-between": "always",
        groups: ["builtin", "external", "parent", "sibling", "index"],
        pathGroups: [
          {
            pattern: "react",
            group: "external",
            position: "before",
          },
        ],
        pathGroupsExcludedImportTypes: ["builtin"],
      },
    ],
  },
};
