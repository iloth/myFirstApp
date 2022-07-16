const userService = require('../users/service');
const fs = require('fs');
const { join } = require('path');
const jwt = require('jsonwebtoken');
const config = require('config');

let loginsData = [];
let authData = undefined;

function loadLogins() {
  const dataJson = fs.readFileSync(join(__dirname, '_logins.json'));
  loginsData = JSON.parse(dataJson);
}

function loadAuth() {
  const dataJson = fs.readFileSync(join(__dirname, '_auth.json'));
  authData = JSON.parse(dataJson);
}

function extractUser(accessToken) {
  if (accessToken) {
    const user = jwt.verify(accessToken, config.get('auth.accessTokenKey'));
    return user;
  }

  return null;
}

function checkPassword(stored, got) {
  return stored == got;
}

module.exports.login = async (login, password) => {
  loadLogins();
  const loginData = loginsData.find((l) => l.login == login);
  if (loginData) {
    if (checkPassword(loginData.password, password)) {
      const user = await userService.read(loginData.userId);
      if (user) {
        const jwtUser = {
          id: user.id,
          login: login,
          name: `${user.first_name} ${user.last_name}`,
          roles: loginData.roles,
        };

        const accessToken = jwt.sign(jwtUser, config.get('auth.accessTokenKey'), { expiresIn: config.get('auth.tokenExpire') });
        const refreshToken = jwt.sign(jwtUser, config.get('auth.refreshTokenKey'));
  
        return { user: jwtUser, accessToken, refreshToken };
      }
    }
  }
  return false;
}

module.exports.clientRights = async () => {
  if (!authData) loadAuth();

  return authData.client;  
}

module.exports.checkApiRight = (authHeader, url, method) => {
  if (!authData) loadAuth();

  let user = null;
  if (authHeader) {
    const accessToken = authHeader.split(' ')[1];
    user = extractUser(accessToken)
  }

  let entry = authData.api.find((row) => url.match(row.path) && (row.method == '*' || row.method == method));

  if (entry) {
    if (entry.anonymus) {
      return true;
    } else if (user) {
      if (!entry.roles || entry.roles.length == 0) {
        return true;
      } else {
        let found = false;
        entry.roles.forEach((role) => {
          if (user.roles.includes(role)) {
            found = true;
          }
        });
        if (found) {
          return true;
        }
      }
    }
  }    

  return false;

}