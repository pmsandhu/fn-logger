import logger from '../dist'
import colorize from '../src/colors'

/** __tests__/browserA **/
export const fnExp = () => logger()
export const namedFnExp = function namedFunc() { logger() }
export function fnDecl() { logger() }
export function nestedFn() { fnExp() }

/** __tests__/browser[B-C] **/
export const mock = {
  obj: { one: 'one', two: 'two', nested: { three: 'three' } },
  arr: [1, 2, 3, 4, 5]
}

export const value = {
  a: colorize('testA'),
  b: colorize('testB').concat(['obj', mock.obj, 'arr', mock.arr, 'num', 5]),
  class_a: colorize('TestClass.a'),
  class_b: colorize('TestClass.b').concat(mock.obj)
}

export class TestClass {
  constructor(obj) { this.obj = obj }
  a() { logger(...arguments) }
  b() { logger(this.obj) }
}

export const testClass = new TestClass(mock.obj)
export const testA = param => logger(param)
export const testB = (...args) => logger(...args)
