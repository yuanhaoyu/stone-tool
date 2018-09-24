const { getQuery, setQuery } = require('../src/index.js');

test('getQuery is working 1', () => {
  expect(getQuery('https://t.com?a=1&b=2', 'b')).toBe('2');
});

test('getQuery is working 2', () => {
  expect(getQuery('https://t.com?a=1', 'b')).toBe(null);
});

test('getQuery is working 2.2', () => {
  expect(getQuery('https://www.baidu.com/s?ie=utf-8&f=3&rsv_bp=1&tn=baidu&wd=es6%20%E8%8E%B7%E5%8F%96object%E7%9A%84key&oq=js%2520%25E8%258E%25B7%25E5%258F%2596object%25E7%259A%2584key&rsv_pq=de3af3f60001f746&rsv_t=7d9cTbDyZWAI%2FAG7WiIkv2YIb04YY8mZ6kAb0IWIL1nJVXphNsk7FDcjrDo&rqlang=cn&rsv_enter=1&inputT=1657&rsv_sug3=18&rsv_sug2=0&prefixsug=es6%2520%25E8%258E%25B7%25E5%258F%2596object%25E7%259A%2584key&rsp=0&rsv_sug4=1657', 'wd'))
  .toBe('es6 获取object的key');
});

test('getQuery is working 3', () => {
  expect(getQuery()).toBe(null);
});

test('setQuery is working 1', () => {
  expect(setQuery('https://t.com?a=1', {num: 21, sad: 't'})).toBe('https://t.com?a=1&num=21&sad=t');
});

test('setQuery is working 2', () => {
  expect(setQuery('https://t.com', {num: 21, sad: 't'})).toBe('https://t.com?num=21&sad=t');
});

test('setQuery is working 2.2', () => {
  expect(setQuery('https://t.com', {ws: 'es6 获取object的key'})).toBe('https://t.com?ws=es6%20%E8%8E%B7%E5%8F%96object%E7%9A%84key');
});

test('setQuery is working 3', () => {
  expect(setQuery()).toBe(undefined);
});