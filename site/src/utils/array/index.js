export const add = array => item => array.push(item);
export const remove = array => item => array = array.filter(v => v !== item);

export const array = { add, remove };