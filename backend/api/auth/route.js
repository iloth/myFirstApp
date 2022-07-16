const controller = require('./controller');

module.exports = function (fastify, options, done) {

  fastify.route({
    url: '/login',
    method: 'POST',
    schema: {
      body: {
        type: 'object',
        properties: {
          login: { type: 'string' },
          password: { type: 'string' }
        }
      },
      response: {
        200: {
          type: 'object',
          properties: {
            user: {
              type: 'object',
              properties: {
                id: { type: 'number' },
                login: { type: 'string' },
                name: { type: 'string' },
                roles: { type: 'array', items: { type: 'string' } }
              }
            },
            accessToken: { type: 'string' },
            refreshToken: { type: 'string' }
          }
        }
      }
    },
    handler: async (request, reply) => { await controller.login(request, reply); }
  });

  done();
}