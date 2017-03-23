import { mock, tests } from '../__mocks__/test.mock'

const { testA, testB, testEdge, testClass } = tests
const spy = jest.spyOn(console, 'log')

test('testA: -- should log funcName plus args passed in', () => {
  testA('meow')
  expect(spy).toBeCalledWith(...mock.value.a, 'meow')
  testA(mock.obj)
  expect(spy).toBeCalledWith(...mock.value.a, mock.obj)
})

test('testB: should print multiple args passed to it', () => {
  testB('obj', mock.obj, 'arr', mock.arr, 'num', 5)
  expect(spy).toBeCalledWith(...mock.value.b)
})

test('testClass.a -- should print class and method name with args passed', () => {
  testClass.a()
  expect(spy).toBeCalledWith(...mock.value.class_a)
  testClass.a('meow')
  expect(spy).toBeCalledWith(...mock.value.class_a, 'meow')
})

test('testClass.b -- should print args accessed from class constructor properties', () => {
  testClass.b()
  expect(spy).toBeCalledWith(...mock.value.class_b)
})

test('testEdge -- should log without %c flag --> console colors not supported in MS Edge', () => {
  // eslint-disable-next-line
  navigator.__defineGetter__('userAgent', () => mock.edge)
  testEdge()
  expect(spy).toBeCalledWith('testEdge', mock.edge)
})

