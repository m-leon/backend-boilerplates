import * as path from 'path';
import { intArg, makeSchema, nonNull, objectType } from 'nexus';
import { nexusPluginFederation, transformSchemaFederation } from 'nexus-federation-plugin';

const args = {
  x: nonNull(
    intArg({
      description: 'value of x'
    })
  ),
  y: nonNull(
    intArg({
      description: 'value of y'
    })
  )
};

const Query = objectType({
  name: 'Query',
  definition(t) {
    t.int('add', {
      resolve(_, { x, y }) {
        return x + y;
      },
      args
    });
  }
});

const unfederatedSchema = makeSchema({
  types: [Query],
  plugins: [nexusPluginFederation],
  outputs: {
    schema: path.join(process.cwd(), 'generated', 'schema.gql'),
    typegen: path.join(process.cwd(), 'node_modules', '@types', '_generated', 'index.d.ts')
  }
});

export const schema = transformSchemaFederation(unfederatedSchema);
