import logger, { colorMap } from '../dist'

const obj = { one: 'one', two: 'two', nested: { three: 'three' } }
const arr= [1, 2, 3, 4, 5]
const edge = 'Chrome/51.0.2704.79 Safari/537.36 Edge/14.14393'

export const css = {
  a: colorMap('testA'),
  b: colorMap('testB'),
  class_a: colorMap('TestClass', 'a'),
  class_b: colorMap('TestClass', 'b')
}

const value = {
  a: ['%ctestA', ...css.a],
  b: ['%ctestB', ...css.b, 'obj', obj, 'arr', arr, 'num', 5],
  class_a: ['%cTestClass%c.a', ...css.class_a],
  class_b: ['%cTestClass%c.b', ...css.class_b, obj]
}

class TestClass {
  constructor(obj) { this.obj = obj }
  a() { logger(...arguments) }
  b() { logger(this.obj) }
}

const testClass = new TestClass(obj, arr)
const testA = param => logger(param)
const testB = (...args) => logger(...args)
const testEdge = () => logger(edge)


export const mock = { obj, arr, edge, value }
export const tests = { testA, testB, testEdge, testClass }
