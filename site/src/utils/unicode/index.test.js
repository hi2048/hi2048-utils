import { encode, decode, create, createWord, createName, createRandomName } from '.';

test('encode', () => expect(encode('苏小蜂')).toBe("\\u82cf\\u5c0f\\u8702"));
test('decode', () => expect(decode('\\u82cf\\u5c0f\\u8702')).toBe('苏小蜂'));
test('create', () => expect(create()).toBeDefined());
test('create', () => expect(createWord()).toBeDefined());
test('create', () => expect(createName()).toBeDefined());
test('create', () => expect(createRandomName()).toBeDefined());