import fastify from 'fastify';
import mercurius from 'mercurius';

(async () => {
  const app = fastify();

  app.register(mercurius, {
    graphiql: 'playground',
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

  console.log(`Playground accessible at ${url}/playground`);
})();
