const logger = require('../dist')
const colorize = require('../src/colors')

const value = {
  a: colorize('testA'),
  b: colorize('testB'),
  class_a: colorize('NodeTestClass.a'),
  class_b: colorize('NodeTestClass.b')
}

const validate = {
  classCol: /(.*)(?:NodeTestClass)/,
  methodCol: /(?:.*NodeTestClass)(.*)/
}

class NodeTestClass {
  constructor() { this.isNodeEnv = true }
  a() { logger() }
  b() { logger(this.isNodeEnv) }
}

const nodeTestClass = new NodeTestClass()
const testA = () => logger()
const testB = () => logger()

module.exports = { value, validate, testA, testB, nodeTestClass }
