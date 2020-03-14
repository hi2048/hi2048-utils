import { isPlainObject } from '.';

test("isPlainObject", () => expect(isPlainObject({ x: 1 })).toBeTruthy());
test("isPlainObject", () => expect(isPlainObject(new Object({ x: 1 }))).toBeTruthy());
test("isPlainObject", () => expect(isPlainObject(new class Test{})).toBeFalsy());