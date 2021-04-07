import { join } from 'path';
import { makeSchema } from 'nexus';
import { nexusPluginFederation, transformSchemaFederation } from 'nexus-federation-plugin';

import { scalarTypes } from './scalars';
import { userTypes } from './user';

const unfederatedSchema = makeSchema({
  types: [...scalarTypes, ...userTypes],
  plugins: [nexusPluginFederation],
  outputs: {
    schema: join(process.cwd(), 'generated', 'schema.gql'),
    typegen: join(process.cwd(), 'node_modules', '@types', '_generated', 'index.d.ts')
  },
  contextType: {
    module: require.resolve('../context.ts'),
    export: 'Context'
  }
});

export const schema = transformSchemaFederation(unfederatedSchema);
