import {Args, Command, Flags} from '@oclif/core'
import {promisify} from 'node:util'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import * as w2v from 'word2vec'
const loadModel = promisify(w2v.loadModel)

export default class Math extends Command {
  static description = 'Perform mathematical operations on words'

  static examples = [
    '<%= config.bin %> <%= command.id %> arya-sister+brother',
  ]

  static flags = {
    size: Flags.integer({char: 's', description: 'size of returned list', default: 1}),
  }

  static args = {
    operation: Args.string({description: 'Mathematical operation you want to perform', required: true}),
  }

  public async run(): Promise<void> {
    const {flags, args} = await this.parse(Math)
    const vectorsFilePath = './data/vectors.txt'

    const model = await loadModel(vectorsFilePath)

    const op = args.operation.replace(/\s+/g, '')

    const word1 = op.split('-')[0]
    const word2 = op.split('-')[1].split('+')[0]
    const word3 = op.split('-')[1].split('+')[1]

    this.log(model.analogy(word1, [word2, word3], flags.size))
  }
}
