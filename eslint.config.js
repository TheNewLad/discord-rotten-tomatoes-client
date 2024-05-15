import globals from "globals";
import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import reactRecommended from "eslint-plugin-react/configs/recommended.js";

export default [
  {
    rules: {
      "no-unused-vars": "error",
      "no-console": "error",
    },
  },
  {
    files: ["**/*.{js,mjs,cjs,jsx,mjsx,ts,tsx,mtsx}"],
    ...reactRecommended,
    languageOptions: {
      ...reactRecommended.languageOptions,
      globals: {
        ...globals.serviceworker,
        ...globals.browser,
      },
    },
  },
  ...tseslint.config(
    eslint.configs.recommended,
    ...tseslint.configs.recommended,
  ),
];
