import Ajax from '../utils/Ajax';

const url = 'http://192.168.100.11:3000/api/users';

export const getAll = async () => {
  return await Ajax.get(url);
}

export const get = async (id) => {
  return await Ajax.get(`${url}/${id}`);
}

export const create = async (user) => {
  return await Ajax.post(`${url}`, user);
}

export const update = async (user) => {
  return await Ajax.put(`${url}/${user.id}`, user);
}

export const del = async (id) => {
  return await Ajax.delete(`${url}/${id}`);
}