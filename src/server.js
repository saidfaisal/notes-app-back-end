const Hapi = require('@hapi/hapi');
const routes = require('./routes');

const init = async () => {
  const server = Hapi.server(
    {
      port: 3000,
      host: process.env.NODE_ENV !== 'production' ? 'localhost' : '0.0.0.0',
      routes: {
        cors: {
          origin: ['*'],
        },
      },
    },
  );

  server.route(routes);

  await server.start();

  console.log(`server berjalan pada ${server.info.uri}`);
};

init();

/**
 * open this website : http://notesapp-v1.dicodingacademy.com/
 */
