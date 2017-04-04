import { value, mock, testA, testB, testClass } from '../__mocks__/browser'

const spy = jest.spyOn(console, 'log')

test('testA: -- should log funcName plus string args passed in', () => {
  testA('meow')
  expect(spy).toBeCalledWith(...value.a, 'meow')
})

test('testA: -- should log funcName plus object args passed in', () => {
  testA(mock.obj)
  expect(spy).toBeCalledWith(...value.a, mock.obj)
})

test('testB: should print multiple args passed to it', () => {
  testB('obj', mock.obj, 'arr', mock.arr, 'num', 5)
  expect(spy).toBeCalledWith(...value.b)
})

test('testClass.a -- should print class and method name without args passed', () => {
  testClass.a()
  expect(spy).toBeCalledWith(...value.class_a)
})

test('testClass.a -- should print class and method name with args passed', () => {
  testClass.a('meow')
  expect(spy).toBeCalledWith(...value.class_a, 'meow')
})

test('testClass.b -- should print args accessed from class constructor properties', () => {
  testClass.b()
  expect(spy).toBeCalledWith(...value.class_b)
})
