// autentification module

import { Cookie } from './cookie';
import { getSettings } from './settings';

export const Auth = {
  token: null,
  /**
   * check token and registration redirect or return & call callback
   * @param {Function} callback - callback
   * @return {undefined} - undefined
   */
  auth(callback) {
    let token = Cookie.get('token') || getToken();

    if (void 0 !== token) {
      Cookie.delete('token');
      Cookie.set('token', token);
      this.token = token;
      if (typeof callback === 'function') {
        callback();
      }
    } else {
      const error = (/error=([-0-9a-zA-Z_]+)/).exec(window.location.hash) || [];

      if (void 0 !== error[1]) {
        Cookie.delete('token');
        this.token = null;
      } else {
        var url;
        const appOptions = getSettings();
        // if (appOptions.isMobile) {
          url = appOptions.authUrl +
            '?response_type=token&client_id=' + appOptions.clientId;
          url += '&scope=' + appOptions.scope +
            '&redirect_uri=' + appOptions.redirectUrl;
          window.location.href = url;
        // } else {
        //  url = appOptions.authUrl + '?response_type=token&client_id=' +
        // appOptions.clientId + '&scope=';
        //  url += appOptions.scope + '&redirect_uri=' + appOptions.redirectUrl;
        //  window.open(url, 'Авторизация', 'width=600,height=500,location=no');
        // }
      }
    }

    function getToken() {
      const token = (/access_token=([-0-9a-zA-Z_]+)/)
        .exec(window.location.hash) || [];
      return token[1];
    }
  },
};
