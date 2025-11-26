import { nextJsConfig } from './eslint/next.lint.mjs';
import storybook from 'eslint-plugin-storybook';

/** @type {import("eslint").Linter.Config} */
export default [
  ...nextJsConfig,
  ...storybook.configs['flat/recommended'],
  {
    rules: {
      'prettier/prettier': ['error', { endOfLine: 'auto' }, { usePrettierrc: true }],
    },
  },
];
