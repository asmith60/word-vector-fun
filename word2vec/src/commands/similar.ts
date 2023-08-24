import {Args, Command, Flags} from '@oclif/core'
import {promisify} from 'node:util'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import * as w2v from 'word2vec'
const loadModel = promisify(w2v.loadModel)

export default class Similar extends Command {
  static description = 'Finds the most similar words to the supplied word'

  static examples = [
    '<%= config.bin %> <%= command.id %> stark -s 20',
  ]

  static flags = {
    size: Flags.integer({char: 's', description: 'size of returned list', default: 10}),
  }

  static args = {
    word: Args.string({description: 'word used to generate similars', required: true}),
  }

  public async run(): Promise<void> {
    const {flags, args} = await this.parse(Similar)
    const vectorsFilePath = './data/vectors.txt'

    const model = await loadModel(vectorsFilePath)

    this.log(model.mostSimilar(args.word, flags.size))
  }
}
