import { Linter } from "eslint";

export default [
  {
    ignores: ["node_modules", "dist"], // Ajusta las carpetas ignoradas si es necesario
  },
  {
    files: ["**/*.{js,jsx}"], // Asegúrate de que coincida con tus archivos
    languageOptions: {
      parser: require("@babel/eslint-parser"),
      ecmaVersion: "latest", // Usa la versión de ECMAScript más reciente
      sourceType: "module",
      globals: {
        window: "readonly", // Para navegadores
      },
    },
    plugins: {
      react: require("eslint-plugin-react"),
    },
    settings: {
      react: {
        version: "detect", // Detecta automáticamente la versión de React
      },
    },
    rules: {
      ...Linter.rules.recommended,
      ...require("eslint-plugin-react").configs.recommended.rules,
      "react/prop-types": "off", // Tu regla personalizada
      semi: ["error", "always"], // Asegura que siempre uses punto y coma
    },
  },
];
