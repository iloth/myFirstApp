const service = require('./service');

module.exports.login = async (request, reply) => {
  const { login, password } = request.body;
  const ret = await service.login(login, password);
  if (ret) {
    reply.send(ret);
  } else {
    reply.status(400).send({message: 'Unknown username or bad password.'});
  }
}