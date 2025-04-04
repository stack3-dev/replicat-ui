import { defineConfig } from '@wagmi/cli';
import { foundry } from '@wagmi/cli/plugins';
import { react } from '@wagmi/cli/plugins';

export default defineConfig({
  out: 'src/generated/wagmi/wagmi.ts',
  contracts: [],
  plugins: [
    foundry({
      project: './libraries/replicat-evm',
      include: [
        'Bridge.json',
        'LayerZeroMessenger.json',
        'ERC20Permit.json',
        'ERC721.json',
        'ERC20.json',
      ],
    }),
    react(),
  ],
});
