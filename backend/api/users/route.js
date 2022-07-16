const controller = require('./controller');

module.exports = function (fastify, options, done) {

  //list
  fastify.get('/', async (request, reply) => {
    await controller.list(request, reply);
  });

  //create
  fastify.post('/', async (request, reply) => {
    await controller.create(request, reply);
  });

  //read
  fastify.get('/:id', async (request, reply) => {
    await controller.read(request, reply);
  });

  //update
  fastify.put('/:id', async (request, reply) => {
    await controller.update(request, reply);
  });

  //delete
  fastify.delete('/:id', async (request, reply) => {
    await controller.delete(request, reply);
  });

  done();
}

