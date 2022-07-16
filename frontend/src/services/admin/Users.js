import config from '../../config/config.json';
import Ajax from '../../utils/Ajax';

const url = config.apiUrl + 'users';

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