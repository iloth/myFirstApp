import HttpError from "./HttpError";

class Ajax {

  // static getAuthentication() {
  //   const token = sessionStorage.getItem('accessToken') ?? localStorage.getItem('accessToken');
  //   if (token) {
  //     return `BEARER ${token}`;
  //   } else {
  //     return null;
  //   }
  // }

  static buildHeaders() {
    const headers = { 
      'Content-Type': 'application/json'
    }

    // const auth = this.getAuthentication();
    // if (auth) {
    //   headers.Authentication = auth;
    // }

    return headers;
  }

  static analyzeResult(result) {
    if (result.status === 200) {
      return result.json();
    } else {
      return result.text().then((errorJson) => {
        const error = errorJson && errorJson.length > 0 ? JSON.parse(errorJson) : null;
        if (error) {
          throw new HttpError(result.status, error.message);
        } else {
          throw new HttpError(result.status);
        }
      });
    }
  }

  static async get(url) {
    return fetch(url, {
          method: 'GET', 
        headers: this.buildHeaders()
      })
    .then((result) => {
      return this.analyzeResult(result);
    })
    .then((result) => result);
  }
  
  static async post(url, data) {
    return fetch(url, { 
      method: 'POST', 
      body: data ? JSON.stringify(data) : null,
      headers: this.buildHeaders()
    })
    .then((result) => {
      return this.analyzeResult(result);
    })
    .then((result) => result);
  }
  
  static async put(url, data) {
    return fetch(url, { 
      method: 'PUT', 
      body: data ? JSON.stringify(data) : null,
      headers: this.buildHeaders()
    })
    .then((result) => {
      return this.analyzeResult(result);
    })
    .then((result) => result);
  }
  
  static async delete(url, data) {
    return fetch(url, { 
      method: 'DELETE', 
      body: data ? JSON.stringify(data) : null,
      headers: this.buildHeaders()
    })
    .then((result) => {
      return this.analyzeResult(result);
    })
    .then((result) => result);
  }
}

export default Ajax;
