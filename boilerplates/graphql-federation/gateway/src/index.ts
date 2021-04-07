import fastify from 'fastify';
import mercurius from 'mercurius';

(async () => {
  const app = fastify();

  app.register(mercurius, {
    graphiql: true,
    path: '/',
    gateway: {
      services: [
        {
          name: 'users',
          url: 'http://localhost:4001'
        }
      ]
    }
  });

  const url = await app.listen(4000);
  console.log(`Gateway running at ${url}`);

  console.log(`Graphiql accessible at ${url}/graphiql`);
})();
