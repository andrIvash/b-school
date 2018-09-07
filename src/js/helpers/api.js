// base API class

import { Cookie } from './cookie';
import { Auth } from './auth';
import { getSettings } from './settings';

export class API {
  constructor(token) {
    this.token = token;
    this.model = {};
    this.appOptions = getSettings();
  }
/**
 * init
 * @return {undefined} - undefinded
 */
  init() {
    if (document.location.href.indexOf('access_token') > -1) {
      Auth.auth(() => {
        const path =
          window.location.href.substring(0, window.location.href.indexOf('?'));
        history.pushState('', document.title, path);
        window.location.reload(true);
        console.log('is mob');
      });
    }
  }

/**
 * Get data
 * @return {Object} - data model
 */
  getData() {
    return this.model;
  }

/**
 * Drow auth page on mobile
 * @return {undefined} - undefined
 */
  drawAuthPage() {
    const body = document.getElementsByTagName('body');
    const html = `
      <div class="auth-container">
        <div class="auth-container__text">
          Это окно закроется через несколько секунд
        </div>;
      </div>  
    `;
    body.innerHTML = html;
  }

/**
 * User Info
 * @return {Promise} user - data in JSON format
 */
  getUserInfo() {
    const url = this.appOptions.api + 'users/me/?access_token=' + this.token;

    return new Promise((resolve, reject) => {
      var req = new XMLHttpRequest();
      req.open('GET', url);
      req.setRequestHeader('Accept', 'application/json');
      req.onload = () => {
        if (req.status === 200) {
          this.model.user = JSON.parse(req.response);
          resolve(JSON.parse(req.response));
        } else {
          Cookie.delete('token');
          Auth.auth();
          reject(Error(req.statusText));
        }
      };
      req.onerror = () => {
        reject(Error('Network Error'));
      };
      req.send();
    });
  }
/**
 * Person Info
 * @param {String} id - user id
 * @return {Promise} user - data in JSON format
 */
  getPersonInfo(id) {
    const url = `
      ${this.appOptions.api}persons/${id}?access_token=${this.token}`;

    return new Promise((resolve, reject) => {
      const req = new XMLHttpRequest();
      req.open('GET', url);
      req.setRequestHeader('Accept', 'application/json');
      req.onload = () => {
        if (req.status === 200) {
          resolve(JSON.parse(req.response));
        } else {
          reject(Error(req.statusText));
        }
      };
      req.onerror = () => {
        reject(Error('Network Error'));
      };
      req.send();
    });
  }
}
