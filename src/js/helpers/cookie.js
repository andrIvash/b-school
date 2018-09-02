// cookie module

export const Cookie = {
/**
 * get data from cookie
 * @param {String} name - property name
 * @return {String | null } - data
 */
  get(name) {
    const matches = window.parent.document.cookie.match(new RegExp(
      '(?:^|; )' + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + '=([^;]*)',
    ));

    return matches ? decodeURIComponent(matches[1]) : null; // undefined
  },

/**
 * set data to cookie
 * @param {String} name - property name
 * @param {String} value - property value
 * @param {Object} options - options
 * @return {undefined} - undefined
 */
  set(name, value, options) {
    options = options || {};
    let expires = options.expires,
      updatedCookie, propName,
      d = new Date();

    if (typeof expires === 'number' && expires) {
      d.setTime(d.getTime() + expires * 1000);
      expires = options.expires = d;
    } else {
      expires = new Date(d.getTime + 14 * 24 * 60 * 60 * 1000);
    }
    if (expires && expires.toUTCString) {
      options.expires = expires.toUTCString();
    }
    value = encodeURIComponent(value);
    updatedCookie = name + '=' + value;
    for (propName in options) {
      if (!options.hasOwnProperty(propName)) {
        continue;
      }
      updatedCookie += '; ' + propName;
      var propValue = options[propName];

      if (propValue !== true) {
        updatedCookie += '=' + propValue;
      }
    }
    window.parent.document.cookie = updatedCookie;
  },

/**
 * delete cookie data
 * @param {String} name - property name
 * @return {undefined} - undefined
 */
  delete(name) {
    this.set(name, '', { expires: -1 });
  },
};
