export default function logger() {
  const fnNameRE = /\s([^\s]+)\s/
  const isMethodRE = /(\w*)\.(\S*)?/
  const unknown = '[[Caller]]:<unknown>'

  const a = new Error().stack
  const callerName = a.split(/\n/)[2].trim()

  const fnName = fnNameRE.test(callerName)
    ? callerName.match(fnNameRE)[1]
    : unknown

  if (/edge/i.test(navigator.userAgent)) {
    const edgeName = /eval/i.test(fnName) ? unknown : fnName
    return console.log(edgeName, ...arguments)
  }

  const isMethod = fnName.match(isMethodRE)
  const colorHashName = isMethod ? `%c${isMethod[1]}%c.${isMethod[2]}` : `%c${fnName}`
  const css = isMethod ? colorMap(isMethod[1], isMethod[2]) : colorMap(fnName)

  console.log(colorHashName, ...css, ...arguments)
}

export const colorMap = (() => {
  const store = {},
    cssString = 'color: #fff; font-weight: 500; padding: 0 .15rem; background:',
    colors1 = ['#FB69A3', '#F9961B', '#2196F3', '#5BCFCF', '#CF6DD3', '#00BFFF', '#4CAF50', '#F20404', '#FF1493'],
    colors2 = ['#95C81B', '#c9155d', '#6F95CF', '#FAC81B', '#2E9E9E', '#074E88', '#FA641B', '#7E8B95', '#c922f2']
  let c1 = -1,
    c2 = -1

  return function (...args) {
    if (c1 === 8) c1 = 0
    if (c2 === 8) c2 = 0

    if (!store[args[0]])
      store[args[0]] = `${cssString}${colors1[++c1]};`

    if (args.length === 2) {
      if (!store[args[1]])
        store[args[1]] = `${cssString}${colors2[++c2]};`
      return [store[args[0]], store[args[1]]]
    }
    return [store[args[0]]]
  }
})()
