/**
 * 
 * @param  {...function} funs 
 * f1, f2, f3 ... = f1(f2(f3(...)))
 */
export const compose = (...funs) => funs.reduce((a, b) => (...args) => a(b(...args)));

/**
 * 
 * @param  {...function} funs 
 * f1, f2, f3 ... = ...f3(f2(f1(args)))
 */
export const pipe = (...funs) => compose(...funs.reverse());

/**
 * 
 * @param {function} fun 
 * @param {array} args 
 * f(a, b, c, ...) = f(a)(b)(c)...
 */
export const curry = (fun, args = []) => args.length === fun.length?fun(...args) : (...arg1) => curry(fun, [...args, ...arg1]);