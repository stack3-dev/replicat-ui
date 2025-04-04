import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema:
    'https://subgraph.satsuma-prod.com/ee2a88f5a2cf/stack3s-team--981216/replicat-ethereum-sepolia/version/v0.1.0/api',
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
