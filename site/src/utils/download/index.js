import { isString } from '../type';

/**
 * 
 * @param {string | object} content 
 * @param {string} fileName 
 * 
 * browser env
 * 
 */

export const download = (content = '', fileName = 'test.txt') => {
  const link = document.createElement('a');
  let blob = new Blob([isString(content)?content : JSON.stringify(content)]);
  
  link.download = fileName;
  link.href = URL.createObjectURL(blob);

  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link)
}