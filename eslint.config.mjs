import { defineConfig } from 'eslint/config';
import nextVitals from 'eslint-config-next/core-web-vitals';
import nextTs from 'eslint-config-next/typescript';
import reactPlugin from 'eslint-plugin-react';
import importPlugin from 'eslint-plugin-import';
import eslintPluginPrettier from 'eslint-plugin-prettier';
import eslintConfigPrettier from 'eslint-config-prettier';
import betterTailwindcss from 'eslint-plugin-better-tailwindcss';

const eslintConfig = defineConfig([
  // 1. Next.js 기본 설정 (Core Web Vitals + TypeScript)
  ...nextVitals,
  ...nextTs,

  // 2. 사용자 정의 설정 (config.js에서 마이그레이션)
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    plugins: {
      react: reactPlugin,
      import: importPlugin,
      prettier: eslintPluginPrettier,
      'better-tailwindcss': betterTailwindcss,
    },
    settings: {
      // React 버전 자동 감지는 Next.js 설정에 포함되어 있을 수 있으나 명시
      react: {
        version: 'detect',
      },
      'better-tailwindcss': {
        // Tailwind CSS 진입점 설정
        entryPoint: './src/styles/globals.css', // Next.js 프로젝트 구조에 맞게 수정 (기존: ./src/styles/index.css)
      },
    },
    rules: {
      // =================================================================
      // Prettier 규칙
      // =================================================================
      'prettier/prettier': 'error',

      // =================================================================
      // 일반 JS/TS 규칙
      // =================================================================
      'no-use-before-define': 'error', // 변수 선언 전에 사용 불가능
      'object-shorthand': ['error', 'always'], // 객체 리터럴에서 축약 구문 사용 강제
      'arrow-body-style': ['error', 'as-needed'], // 화살표 함수에서 불필요한 중괄호 사용 금지
      'prefer-arrow-callback': 'error', // 콜백 함수에서 화살표 함수 사용 강제
      eqeqeq: ['error', 'always'], // == 대신 === 사용 강제
      'padding-line-between-statements': [
        'error',
        { blankLine: 'always', prev: '*', next: 'return' }, // return 문 앞에는 항상 빈 줄
        { blankLine: 'always', prev: ['const', 'let', 'var'], next: '*' }, // 변수 선언 후에는 항상 빈 줄
        {
          blankLine: 'any',
          prev: ['const', 'let', 'var'],
          next: ['const', 'let', 'var'],
        }, // 변수 선언끼리는 붙여도 됨
      ],
      'prefer-destructuring': [
        'error',
        {
          VariableDeclarator: {
            array: false,
            object: true, // 변수 선언 시 객체 구조 분해 할당 강제
          },
          AssignmentExpression: {
            array: false,
            object: false,
          },
        },
      ],

      // =================================================================
      // TypeScript 규칙
      // =================================================================
      '@typescript-eslint/array-type': 'off', // string[] 이나 Array<string> 모두 사용 허용
      '@typescript-eslint/ban-ts-comment': 'off', // ts-ignore 사용 허용
      '@typescript-eslint/no-explicit-any': 'error', // any 타입 사용 금지
      '@typescript-eslint/no-require-imports': 'error', // require import 사용 금지
      '@typescript-eslint/no-empty-object-type': 'error', // 빈 객체 타입 사용 금지
      '@typescript-eslint/no-unused-vars': [
        'warn',
        {
          argsIgnorePattern: '^_', // _로 시작하는 인자는 미사용 허용
          varsIgnorePattern: '^_', // _로 시작하는 변수는 미사용 허용
        },
      ],
      '@typescript-eslint/naming-convention': [
        'error',
        // camelCase 변수, PascalCase 변수, UPPER_CASE 변수 허용
        {
          selector: 'variable',
          format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
        },
        // camelCase 함수, PascalCase 함수 허용
        {
          selector: 'function',
          format: ['camelCase', 'PascalCase'],
        },
        // PascalCase 클래스, interfaces, type aliases, enums 허용
        {
          selector: 'typeLike',
          format: ['PascalCase'],
        },
        // interface 앞에 I 사용 불가
        {
          selector: 'interface',
          format: ['PascalCase'],
          custom: {
            regex: '^I[A-Z]',
            match: false,
          },
        },
        // typeAlias 앞에 T 사용 불가
        {
          selector: 'typeAlias',
          format: ['PascalCase'],
          custom: {
            regex: '^T[A-Z]',
            match: false,
          },
        },
        // typeParameter 앞에 T 사용 불가
        {
          selector: 'typeParameter',
          format: ['PascalCase'],
          custom: {
            regex: '^T[A-Z]',
            match: false,
          },
        },
      ],

      // =================================================================
      // React 규칙
      // =================================================================
      // Next.js에서는 React Import가 불필요하므로 관련 규칙 off
      'react/react-in-jsx-scope': 'off',
      'react/jsx-uses-react': 'off',

      'react/jsx-key': 'error', // iterator 렌더링 시 key prop 필수
      'react/jsx-no-duplicate-props': 'error', // JSX에서 중복된 props 사용 금지
      'react/jsx-no-undef': 'error', // JSX에서 정의되지 않은 변수 사용 금지
      'react/no-children-prop': 'error', // children을 prop으로 직접 넘기는 것 금지
      'react/no-danger': 'error', // dangerouslySetInnerHTML 사용 금지 (XSS 위험)
      'react/no-deprecated': 'error', // deprecated API 사용 금지
      'react/self-closing-comp': 'error', // 자식 없는 컴포넌트는 self-closing 쓰도록 강제
      'react/jsx-curly-brace-presence': 'error', // 불필요한 중괄호 사용 금지

      // =================================================================
      // Import 규칙
      // =================================================================
      // 'import/no-cycle': 'error', // 순환 참조(Circular Dependency) 금지 (시간이 너무 오래 걸리기 때문에 off)
      'no-restricted-imports': [
        'error',
        {
          paths: [
            // import { React } from 'react' 금지 (default import 권장 or 불필요)
            {
              name: 'react',
              importNames: ['default'],
              message: "Import named exports from 'react' instead.",
            },
          ],
          patterns: ['../*', './*'], // 상대 경로 import 금지 (alias 사용 권장)
        },
      ],
      'import/order': [
        'error',
        {
          alphabetize: {
            order: 'asc', // 알파벳 오름차순으로 정렬 (A → Z)
            caseInsensitive: true, // 대소문자 구분 없이 정렬
          },
          'newlines-between': 'always', // 각 import 그룹 간에 항상 한 줄을 띄움
          groups: [['builtin', 'external'], 'internal', 'unknown', ['parent', 'sibling'], 'index'],
          distinctGroup: false,
          pathGroups: [
            {
              pattern: 'react',
              group: 'external',
              position: 'before',
            },
            {
              pattern: '@/**', // src 폴더 alias
              group: 'internal',
              position: 'before',
            },
          ],
          pathGroupsExcludedImportTypes: ['react'], // react 제외
        },
      ],
      'import/newline-after-import': 'warn',

      // =================================================================
      // Tailwind CSS 규칙
      // =================================================================
      ...betterTailwindcss.configs.correctness.rules,
      'better-tailwindcss/no-unknown-classes': [
        'error',
        {
          ignore: ['dark'], // 사용자 정의 클래스 허용
        },
      ],

      // =================================================================
      // 기타 오버라이드 (Standard 등)
      // =================================================================
      // Prettier와 충돌하는 포맷팅 관련 규칙 (Prettier가 관리)
      'comma-dangle': 'off', // 후행 쉼표 (Trailing Comma)
      'no-global-assign': 'off', // 전역 변수 재할당 금지 (필요 시 Prettier/TS가 처리)
      quotes: 'off', // 따옴표 스타일 (Single/Double)
      'space-before-function-paren': 'off', // 함수 정의 앞 공백
    },
  },

  // 3. Prettier 설정 (다른 Config와 충돌하는 규칙 비활성화)
  // 가장 마지막에 위치해야 함
  eslintConfigPrettier,

  // 4. 무시할 파일 설정
  {
    ignores: [
      '.next/**',
      'out/**',
      'build/**',
      'next-env.d.ts',
      'dist',
      'node_modules',
      '.github/commitlint.config.mjs',
      'temp/**',
      '**/*.css',
    ],
  },
]);

export default eslintConfig;
