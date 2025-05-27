import pluginJs from '@eslint/js';
import perfectionist from 'eslint-plugin-perfectionist';
import globals from 'globals';
import tseslint from 'typescript-eslint';

/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ['**/*.{js,mjs,cjs,ts}'] },
  { languageOptions: { globals: globals.node } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,

  {
    plugins: { perfectionist },
    rules: {
      'perfectionist/sort-array-includes': 'warn',
      'perfectionist/sort-exports': 'warn',
      'perfectionist/sort-imports': 'warn',
      'perfectionist/sort-interfaces': 'warn',
      'perfectionist/sort-intersection-types': 'warn',
      'perfectionist/sort-object-types': 'warn',
      'perfectionist/sort-objects': [
        'warn',
        {
          type: 'natural',
        },
      ],
      'perfectionist/sort-union-types': [
        'warn',
        {
          groups: [
            'conditional',
            'function',
            'import',
            'intersection',
            'keyword',
            'literal',
            'named',
            'object',
            'operator',
            'tuple',
            'union',
            'nullish',
          ],
        },
      ],

      '@typescript-eslint/no-unused-vars': 'off',
      '@typescript-eslint/no-explicit-any': 'off'
    },
  },
];
