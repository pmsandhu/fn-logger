const env = {
  node: {
    ref: 'node',
    len: 6,
    col_1: [
      ' \x1b[1m\x1b[7m\x1b[40m\x1b[31m ', ' \x1b[1m\x1b[7m\x1b[40m\x1b[32m ',
      ' \x1b[1m\x1b[7m\x1b[40m\x1b[33m ', ' \x1b[1m\x1b[7m\x1b[40m\x1b[34m ',
      ' \x1b[1m\x1b[7m\x1b[40m\x1b[35m ', ' \x1b[1m\x1b[7m\x1b[40m\x1b[36m ',
      ' \x1b[1m\x1b[7m\x1b[40m\x1b[37m '
    ],
    col_2: [
      '\x1b[1m\x1b[37m\x1b[42m', '\x1b[1m\x1b[30m\x1b[43m',
      '\x1b[1m\x1b[37m\x1b[45m', '\x1b[1m\x1b[37m\x1b[46m',
      '\x1b[1m\x1b[37m\x1b[41m', '\x1b[1m\x1b[37m\x1b[44m',
      '\x1b[1m\x1b[7m\x1b[40m\x1b[37m'
    ],
    hashColor(color, name) {
      return `${color}${name} \x1b[0m`
    },
    concatMethod(classHash, methodHash) {
      return [classHash + methodHash]
    }
  },

  browser: {
    ref: 'browser',
    len: 8,
    col_1: [
      '#FB69A3', '#F9961B', '#2196F3', '#5BCFCF', '#CF6DD3',
      '#00BFFF', '#4CAF50', '#F20404', '#FF1493'
    ],
    col_2: [
      '#95C81B', '#C9155D', '#6F95CF', '#FAC81B', '#2E9E9E',
      '#074E88', '#FA641B', '#7E8B95', '#C922F2'
    ],
    hashColor(color, name) {
      const style = 'color:#fff; font-weight:500; padding:0 .15rem; background:'
      return [`%c${name}`, `${style}${color};`]
    },
    concatMethod(classHash, methodHash) {
      return [classHash[0] + methodHash[0], classHash[1], methodHash[1]]
    }
  }
}

export default env
