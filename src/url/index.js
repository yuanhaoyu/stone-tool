/**
 * get decode URL query
 * @param {string} url 
 * @param {string} paramsKey 
 */
const getQuery = (url, paramsKey) => {
  if(paramsKey && url) {
    const paramsArr = url.substring(url.indexOf('?')).split('&');
    for (let i = 0; i < paramsArr.length; i++) {
      if (paramsArr[i].indexOf(paramsKey) !== -1) {
        return decodeURIComponent(paramsArr[i].split('=')[1])
      }
    }
    return null;
  } else {
    return null;
  }
}

/**
 * set encode URL query
 * @param {string} url 
 * @param {object} params 
 */
const setQuery = (url, params) => {
  if (url && Object.keys(params).length > 0) {
    let paramsArr = [];
    for (let i in params) {
      paramsArr.push(`${i}=${encodeURIComponent(params[i])}`);
    }
    return url + (url.indexOf('?') !== -1 ? '&' : '?') + paramsArr.join('&');
  } else {
    return url;
  }
}

module.exports = {
  getQuery,
  setQuery
}