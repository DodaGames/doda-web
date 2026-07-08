/** @type {import('@commitlint/types').UserConfig} */

const TYPE_EMOJI_MAP = {
  feat: '✨',
  fix: '🐞',
  docs: '📝',
  design: '🎨',
  refactor: '🔨',
  setting: '⚙',
  chore: '🔧',
  API: '📬',
  move: '🚚',
  rename: '🚚',
  ci: '👷',
  wip: '🚧',
  deploy: '🌏',
  test: '✅',
};

export default {
  extends: ['@commitlint/config-conventional'],
  parserPreset: {
    parserOpts: {
      // 이모지와 타입을 각각 캡처: "✨ feat: message"
      headerPattern: /^([^\w\n]+) (\w+)(?:\((.+)\))?!?: (.+)$/,
      headerCorrespondence: ['emoji', 'type', 'scope', 'subject'],
    },
  },
  plugins: [
    {
      rules: {
        'emoji-type-match': ({ emoji, type }) => {
          const expected = TYPE_EMOJI_MAP[type];
          if (!expected) return [true];
          const valid = emoji?.trim() === expected;
          return [valid, `"${type}" 타입은 "${expected}" 이모지를 사용해야 합니다 (현재: "${emoji?.trim()}")`];
        },
      },
    },
  ],
  rules: {
    'type-enum': [2, 'always', Object.keys(TYPE_EMOJI_MAP)],
    'type-case': [0], // API 등 대문자 타입 허용
    'subject-case': [0], // 한글 메시지 내 영문 대문자 허용을 위해 체크 비활성화
    'emoji-type-match': [2, 'always'],
  },
};
