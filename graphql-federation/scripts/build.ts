import execSh from 'exec-sh';

const exec = execSh.promise;

(async () => {
  exec('cd service-users && yarn build');
  exec('cd gateway && yarn build');
})();
