function logNode(...args) {
  const fnNameRE = /\s([^\s]+)\s/
  const isMethodRE = /(\w*)\./
  const unknown = '[[Caller]]:<unknown>'

  const callerName = new Error().stack.split(/\n/)[2].trim()

  const fnName = callerName.match(fnNameRE) ? callerName.match(fnNameRE)[1] : unknown
  const colorHashName = fnName.match(isMethodRE) ? fnName.match(isMethodRE)[1] : fnName

  console.log(`${colorMap(colorHashName)}`, `${fnName}`, '\x1b[0m', ...args)
}

const colorMap = (() => {
  let lastIndex = -1
  const keyMap = new Map()
  const colors = [
    '\x1b[41m\x1b[1m', '\x1b[42m\x1b[1m', '\x1b[43m\x1b[1m',
    '\x1b[44m\x1b[1m', '\x1b[45m\x1b[1m', '\x1b[46m\x1b[1m'
  ]
  return function (...args) {
    if (keyMap.has(args[0])) return colors[keyMap.get(args[0])]
    lastIndex = lastIndex === 5 ? 0 : lastIndex + 1
    keyMap.set(args[0], lastIndex)
    return colors[lastIndex]
  }
})()

export default logNode
