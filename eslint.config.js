import { fixupConfigRules } from "@eslint/compat"
import { FlatCompat } from "@eslint/eslintrc"
import js from "@eslint/js"
import prettier from "eslint-config-prettier"
import unusedImports from "eslint-plugin-unused-imports"

const compat = new FlatCompat({
  baseDirectory: import.meta.dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
})

/** @type {import('eslint').Linter.FlatConfig[]} */
const config = [
  {
    ignores: [
      ".next/**",
      "node_modules/**",
      "build/**",
      "dist/**",
      "out/**",
      "*.min.js",
      "*.bundle.js",
    ],
  },
  {
    name: "base",
    files: ["**/*.{js,ts,jsx,tsx}"],
    plugins: {
      "unused-imports": unusedImports,
    },
    languageOptions: {
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures: { jsx: true },
      },
    },
    settings: {
      next: {
        rootDir: ["./"],
      },
    },
    rules: {
      "react/jsx-key": "off",
      "unused-imports/no-unused-imports": "error",
    },
  },
  ...fixupConfigRules(compat.extends("next/core-web-vitals")),
  prettier,
]

export default config
