const { value, validate, testA, testB, nodeTestClass } = require('../__mocks__/node.js')

const spy = jest.spyOn(console, 'log')
let i = -1
afterEach(() => i++)

test('should be node environment', () => {
  expect(typeof window).toBe('undefined')
})

test('testA -- should assign the same color to subsequent calls to a given function', () => {
  testA()
  expect(spy.mock.calls[i][0]).toBe(value.a[0])
})

test('testB -- should assign different color than it did to testA()', () => {
  testB()
  expect(spy.mock.calls[i][0]).toBe(value.b[0])
  expect(spy.mock.calls[i-1][0]).not.toBe(spy.mock.calls[i][0])
})

test('nodeTestClass.a -- should assign two separate colors to class and method name', () => {
  nodeTestClass.a()
  expect(spy.mock.calls[i][0]).toBe(value.class_a[0])
})

test('nodeTestClass.a -- should have same valueColor properties as previous call to it', () => {
  nodeTestClass.a()
  expect(spy.mock.calls[i-1][0]).toBe(spy.mock.calls[i][0])
})

test('nodeTestClass.b -- should have same NodeTestClass color assigned with a different method color than a', () => {
  nodeTestClass.b()
  const prevCallClassCol = spy.mock.calls[i-1][0].match(validate.classCol)[1]
  const lastCallClassCol = spy.mock.calls[i][0].match(validate.classCol)[1]

  const prevCallMethodCol = spy.mock.calls[i-1][0].match(validate.methodCol)[1]
  const lastCallMethodCol = spy.mock.calls[i][0].match(validate.methodCol)[1]

  expect(prevCallClassCol).toBe(lastCallClassCol)
  expect(prevCallMethodCol).not.toBe(lastCallMethodCol)
})
