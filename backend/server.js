const fastify = require('fastify')({ logger: true });
const { join } = require('path');
const config = require('config');
const authService = require('./api/auth/service');

fastify.addHook('preHandler', (request, reply, done) => {
  if (request.url.startsWith('/api')) {
    const hasRight = true; //authService.checkApiRight(request.headers.authentication, request.url, request.method);

    if (!hasRight) {
      reply.status(403).send();
      return;
    }
  }
  done();
})

fastify.register(require('@fastify/static'), { root: join(__dirname, 'frontend', 'build') });
fastify.register(require('@fastify/cors'), { })

fastify.register(require('./api/auth/route'), { prefix: '/api/auth' });
fastify.register(require('./api/users/route'), { prefix: '/api/users' });

fastify.listen(config.get('port'), '192.168.100.11', function (err, address) {
  if (err) {
    fastify.log.error(err)
    process.exit(1)
  }
})