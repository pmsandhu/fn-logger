import logger from '../dist'
import { fnExp, namedFnExp, fnDecl, nestedFn } from '../__mocks__/browser'

const spy = jest.spyOn(console, 'log')
let i = -1
afterEach(() => i++)

test('should be a browser environment', () => {
  expect(typeof window).toBe('object')
})

test('fnExp -- should with function expressions', () => {
  fnExp()
  expect(spy.mock.calls[i][0]).toBe('%cfnExp')
  expect(spy.mock.calls[i][0]).not.toBe(null)
})

test('funDecl -- should work with function declarations', () => {
  fnDecl()
  expect(spy.mock.calls[i][0]).toBe('%cfnDecl')
})

test('nameFnExp -- should work with named function expressions', () => {
  namedFnExp()
  expect(spy.mock.calls[i][0]).toBe('%cnamedFunc')
})

test('nestedFn -- should log caller as fnExp even when called from nested function calls', () => {
  nestedFn()
  expect(spy.mock.calls[i][0]).toBe('%cfnExp')
})

test('unknown/anonymous caller should return [[Caller]]:<unknown>', () => {
  const unknown = '[[Caller]]:<unknown>'
  logger()
  const replaceNodeVal = /<anonymous>/.test(spy.mock.calls[i][0])
    ? unknown
    : spy.mock.calls[i]
  expect(replaceNodeVal).toBe(unknown)
})
