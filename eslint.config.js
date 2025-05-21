import eslintPluginAstro from 'eslint-plugin-astro';
import tseslintParser from '@typescript-eslint/parser';
import tseslintPlugin from '@typescript-eslint/eslint-plugin';

export default [
  { ignores: ['node_modules/**', '.astro/**', 'dist/**'] },
  ...eslintPluginAstro.configs.recommended,
  {
    rules: {
      // override/add rules settings here, such as:
      // "astro/no-set-html-directive": "error"
    },
  },
  {
    files: ['**/*.{ts,tsx}'],
    plugins: {
      '@typescript-eslint': tseslintPlugin,
    },
    languageOptions: {
      parser: tseslintParser,
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    rules: {
      // TypeScript-specific rules
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/explicit-function-return-type': 'off',
    },
  },
];
