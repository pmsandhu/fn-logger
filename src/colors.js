import env from './env'

const ENV = typeof window === 'undefined'
  ? env.node
  : env.browser

const colorize = (({ col_1, col_2, len, hashColor, concatMethod }) => {
  const METHOD_RE = /(\w*)\.(\S*)?/
  // eslint-disable-next-line
  let store = {}
  let c1 = -1
  let c2 = len

  return function (name) {
    if (c1 === len) c1 = -1
    if (c2 === 0) c2 = len

    if (METHOD_RE.test(name)) {
      const [, className, methodName] = name.match(METHOD_RE)

      if (!store[className])
        store[className] = hashColor(col_1[++c1], className)
      if (!store[methodName])
        store[methodName] = hashColor(col_2[--c2], `.${methodName}`)

      return concatMethod(store[className], store[methodName])
    }

    if (!store[name])
      store[name] = hashColor(col_1[++c1], name)

    return Array.isArray(store[name])
      ? store[name]
      : [store[name]]
  }
})(ENV)

export default colorize
