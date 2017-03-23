import { tests, css } from '../__mocks__/test.mock'

const { testA, testClass } = tests
const spy = jest.spyOn(console, 'log')
let i = 0
afterEach(() => i++)

test('testA -- should assign the same color to subsequent calls to a given function', () => {
  testA()
  i++
  testA()
  expect(spy.mock.calls[i - 1][1]).toBe(css.a[0])
  expect(spy.mock.calls[i][1]).toBe(css.a[0])
})

test('testClass.a -- should assign two seperate colors to class and method name', () => {
  testClass.a()
  expect(spy.mock.calls[i][1]).toBe(css.class_a[0])
  expect(spy.mock.calls[i][2]).toBe(css.class_a[1])
  expect(spy.mock.calls[i][1]).not.toBe(spy.mock.calls[i][2])
})

test('testClass.a -- should have same cssColor properties as previous call to it', () => {
  testClass.a()
  expect(spy.mock.calls[i-1][1]).toBe(spy.mock.calls[i][1])
  expect(spy.mock.calls[i-1][2]).toBe(spy.mock.calls[i][2])
})

test('testClass.b -- should have same TestClass color assigned with a different method color than a', () => {
  testClass.b()
  expect(spy.mock.calls[i][1]).toBe(css.class_b[0])
  expect(spy.mock.calls[i][2]).toBe(css.class_b[1])
  expect(spy.mock.calls[i][2]).not.toBe(spy.mock.calls[i-1][2])
})
