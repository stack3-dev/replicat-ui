import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema:
    'https://api.studio.thegraph.com/query/81892/replicat-ethereum-sepolia/version/latest',
  documents: ['src/**/*.tsx', 'src/**/*.ts', '!src/generated/**/*'],
  ignoreNoDocuments: true,
  generates: {
    './src/generated/gql/': {
      preset: 'client',
      plugins: [],
    },
  },
};

export default config;
