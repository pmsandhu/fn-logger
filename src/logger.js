import colorize from './colors'

function logger() {
  const FN_RE = /\s([^\s]+)\s/
  const caller = new Error().stack.split(/\n/)[2].trim()

  const fnName = FN_RE.test(caller)
    ? caller.match(FN_RE)[1]
    : '[[Caller]]:<unknown>'

  const colorString = colorize(fnName)
  console.log(...colorString, ...arguments)
}

export default logger
