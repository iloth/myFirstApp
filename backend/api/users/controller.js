const service = require('./service');

module.exports.list = async (request, reply) => {
  reply.send(await service.list());    
}

module.exports.create = async (request, reply) => {
  const user = request.body;
  reply.send(await service.create(user));  
}

module.exports.read = async (request, reply) => {
  const { id } = request.params;
  reply.send(await service.read(id));
}

module.exports.update = async (request, reply) => {
  const user = request.body;
  reply.send(await service.update(user));  
}

module.exports.delete = async (request, reply) => {
  const { id } = request.params;
  reply.send(await service.delete(id) ?? { deleted: true });
}