var cache = {};

var random = function() {
  var str = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890';
  var result = '';
  for (var i = 0; i < 6; i++) {
    result += str[Math.ceil((Math.random() * str.length))];
  }
  return result;
}
/**
 * Encodes a URL to a shortened URL.
 *
 * @param {string} longUrl
 * @return {string}
 */
var encode = function(longUrl) {
  var str;
  do {
    str = random();
  } while(cache[str])
  cache[str] = longUrl;
  return 'http://tinyurl.com/' + str;
};

/**
 * Decodes a shortened URL to its original URL.
 *
 * @param {string} shortUrl
 * @return {string}
 */
var decode = function(shortUrl) {
  var key = shortUrl.substr('http://tinyurl.com/'.length);
  return cache[key];
};

/**
 * Your functions will be called as such:
 * decode(encode(url));
 */
console.log(decode(encode('http://baidu.com')))
console.log(decode(encode('http://baidu2.com')))
