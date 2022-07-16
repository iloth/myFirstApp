const fs = require('fs');
const { join } = require('path');

let data = [];

const load = () => {
  const dataJson = fs.readFileSync(join(__dirname, '_data.json'));
  data = JSON.parse(dataJson);
}

const save = () => {
  const dataJson = JSON.stringify(data, null, 2);
  fs.writeFileSync(join(__dirname, '_data.json'), dataJson);
}


module.exports.list = async () => {
  load();
  return data;
}

module.exports.create = async (user) => {
  load();
  const id = data.reduce((max, curr) => max > curr.id ? max : curr, 1) + 1;
  user.id = id;
  data.push(user);
  save();
  return data[data.length - 1];
}

module.exports.read = async (id) => {
  load();
  const user = data.find(u => u.id == id);
  return user;
}

module.exports.update = async (user) => {
  load();
  const index = data.findIndex(u => u.id == user.id);
  if (index > -1) {
    data.splice(index, 1, user);
    save();
    return data[index];
  }

  return user;
}

module.exports.delete = async (id) => {
  load();
  const index = data.findIndex(u => u.id == user.id);
  if (index > -1) {
    data.splice(index, 1);
    save();
    return true;
  }
  return false;
}