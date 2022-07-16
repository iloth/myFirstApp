import config from '../config/config.json';
import Ajax from '../utils/Ajax';

const url = config.apiUrl + 'auth';

export const login = async (login, password, remember) => {
  return Ajax.post(`${url}/login`, { login, password })
    .then((result) => {
      if (result && result.accessToken) {
        if (remember) {
          localStorage.setItem('accessToken', result.accessToken);
          localStorage.setItem('refreshToken', result.refreshToken);
          localStorage.setItem('user', JSON.stringify(result.user));
        } else {
          sessionStorage.setItem('accessToken', result.accessToken);
          sessionStorage.setItem('refreshToken', result.refreshToken);
          sessionStorage.setItem('user', JSON.stringify(result.user));          
        }
      }
      return result;
    });
}