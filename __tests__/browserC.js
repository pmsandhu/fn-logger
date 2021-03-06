import { value, testA, testB, testClass } from '../__mocks__/browser'

const spy = jest.spyOn(console, 'log')
let i = 0
afterEach(() => i++)

test('testA -- should assign the same color to subsequent calls to a given function', () => {
  testA()
  expect(spy.mock.calls[i][1]).toBe(value.a[1])
})
test('testB -- should assign different color than it did to testA()', () => {
  testB()
  expect(spy.mock.calls[i][1]).toBe(value.b[1])
  expect(spy.mock.calls[i - 1][1]).not.toBe(spy.mock.calls[i][1])
})

test('testClass.a -- should assign two seperate colors to class and method name', () => {
  testClass.a()
  expect(spy.mock.calls[i][1]).toBe(value.class_a[1])
  expect(spy.mock.calls[i][2]).toBe(value.class_a[2])
  expect(spy.mock.calls[i][1]).not.toBe(spy.mock.calls[i][2])
})

test('testClass.a -- should have same valueColor properties as previous call to it', () => {
  testClass.a()
  expect(spy.mock.calls[i-1][1]).toBe(spy.mock.calls[i][1])
  expect(spy.mock.calls[i-1][2]).toBe(spy.mock.calls[i][2])
})

test('testClass.b -- should have same TestClass color assigned with a different method color than a', () => {
  testClass.b()
  expect(spy.mock.calls[i][1]).toBe(value.class_b[1])
  expect(spy.mock.calls[i][2]).toBe(value.class_b[2])
  expect(spy.mock.calls[i][2]).not.toBe(spy.mock.calls[i-1][2])
})
