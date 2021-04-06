import execSh from 'exec-sh';
import waitPort from 'wait-port';

const exec = execSh.promise;

(async () => {
  exec('cd service-users && yarn dev');

  await waitPort({
    host: 'localhost',
    port: 4001
  });

  exec('cd gateway && yarn dev');
})();
