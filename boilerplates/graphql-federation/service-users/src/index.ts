import fastify from 'fastify';
import mercurius from 'mercurius';

import { configureContext } from './context';
import { schema } from './schema';

(async () => {
  const app = fastify();

  app.register(mercurius, {
    graphiql: 'playground',
    context: configureContext,
    path: '/',
    schema
  });

  const url = await app.listen(4001);
  console.log(`Users service running at ${url}`);

  console.log(`Playground accessible at ${url}/playground`);
})();
