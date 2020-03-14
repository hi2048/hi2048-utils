import { isFunction } from '../type';
import { random } from '../random';
import { familyNames, firstNames } from './index.config';

export const encode = str => `\\u${Array.from(str).map(char => `00${char.charCodeAt().toString(16)}`.slice(-4)).join('\\u')}`;

export const decode = par => {
  let str = par;

  if(isFunction(par)) {
    str = par();
  }
  
  return unescape(str.replace(/\\/g, '%'));
};

export const create = () => `\\u${(random(20901) + 19968).toString(16)}`;

export const createWord = () => decode(create);

export const createRandomName = () => {
  const count = random(2, 4);
  const result = [];

  for(let i = 0; i < count; i++) {
    result.push(createWord());
  }

  return result.join('');
};

export const createName = () => {
  return `${familyNames[random(familyNames.length)]}${firstNames[random(firstNames.length)]}`;
};

export const unicode = {
  encode,
  decode,
  create,
  createWord,
  createName,
  createRandomName
};