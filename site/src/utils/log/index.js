const log = type => (target, name, descriptor) => {
  const oldFunc = descriptor.value;

  descriptor.value = (...args) => {
    console.log(`${target.constructor.name}: `);
    console.log(`${type} start: ${name} (${args}).`);

    let ret;
    try {
      ret = oldFunc(...args);
      console.log(`${type} succeed: ${name} (${args} => ${ret}).`);
    } catch(err) {
      console.log(`${type} failed: ${name} (${args} => ${err}).`);
    }

    return ret;
  }

  return descriptor;
}

export const logger = (...args) => {
  if(args.length < 2) {
    const [type = ''] = args;
    
    return log(type);
  }

  return log('')(...args);
}