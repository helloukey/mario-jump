import globals from "globals";

import path from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import pluginJs from "@eslint/js";
import eslintConfigPrettier from "eslint-config-prettier";

// mimic CommonJS variables -- not needed if using CommonJS
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: pluginJs.configs.recommended,
});

/* eslint import/no-anonymous-default-export: [2, {"allowArray": true}] */
export default [
  { languageOptions: { globals: globals.browser } },
  ...compat.extends("airbnb"),
  {
    rules: {
      "no-unused-vars": "error",
      "no-undef": "error",
    },
    extends: ["prettier"],
  },
  eslintConfigPrettier,
];
