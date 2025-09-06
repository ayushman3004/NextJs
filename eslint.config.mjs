import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),

  // add your custom rules here
  {
    rules: {
      "@typescript-eslint/no-explicit-any": "off",       // allow any type
      "@typescript-eslint/no-unused-vars": "warn",      // unused vars are warnings
      "prefer-const": "warn",                            // allow let
      "no-var": "warn",                                  // allow var
      "react-hooks/exhaustive-deps": "warn",            // allow missing useEffect deps
      "@next/next/no-img-element": "off"               // allow <img>
    },
  },
];

export default eslintConfig;
