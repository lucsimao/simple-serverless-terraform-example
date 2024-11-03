import typescriptEslint from '@typescript-eslint/eslint-plugin';
import importHelpers from 'eslint-plugin-import-helpers';
import unusedImports from 'eslint-plugin-unused-imports';
import globals from 'globals';
import tsParser from '@typescript-eslint/parser';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import js from '@eslint/js';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

export default [
  {
    ignores: ['**/jest.config.js', '**/jest.setup.ts'],
  },
  ...compat.extends(
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended'
  ),
  {
    plugins: {
      '@typescript-eslint': typescriptEslint,
      'import-helpers': importHelpers,
      'unused-imports': unusedImports,
    },

    languageOptions: {
      globals: {
        ...globals.jest,
        ...globals.jasmine,
      },

      parser: tsParser,
      ecmaVersion: 5,
      sourceType: 'script',

      parserOptions: {
        project: ['./tsconfig.json'],
      },
    },

    rules: {
      'no-console': 'warn',

      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
        },
      ],

      '@typescript-eslint/no-floating-promises': 2,
      'unused-imports/no-unused-imports': 'error',

      'import-helpers/order-imports': [
        'error',
        {
          newlinesBetween: 'always',
          groups: ['module', ['parent', 'sibling', 'index']],

          alphabetize: {
            order: 'asc',
            ignoreCase: true,
          },
        },
      ],
    },
  },
];
