import logger from '../dist'

const fnExp = () => logger(...arguments)
const namedFnExp = function namedFunc() { logger() }
function fnDecl() { logger() }
function nestedFnCaller() { fnExp() }

const spy = jest.spyOn(console, 'log')
let i = 0
afterEach(() => i++)

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

test('nestedFnCaller -- should log caller as fnExp even when called from nested function calls', () => {
  nestedFnCaller()
  expect(spy.mock.calls[i][0]).toBe('%cfnExp')
})

test('unknown/anonymous caller should return [[Caller]]:<unknown>', () => {
  const re = /<anonymous>/
  const shouldEql = '[[Caller]]:<unknown>'
  logger()
  const replaceNodeVal = re.test(spy.mock.calls[i][0]) ? shouldEql : spy.mock.calls[i]
  expect(replaceNodeVal).toBe(shouldEql)
})
