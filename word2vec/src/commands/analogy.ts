import {Args, Command, Flags} from '@oclif/core'
import {promisify} from 'node:util'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import * as w2v from 'word2vec'
const loadModel = promisify(w2v.loadModel)

export default class Analogy extends Command {
  static description = 'For a pair of words in a relationship, this command tries to find the term which stands in an analogous relationship to the supplied word.'

  static examples = [
    '<%= config.bin %> <%= command.id %> woman man king -s 20',
  ]

  static flags = {
    size: Flags.integer({char: 's', description: 'size of returned list', default: 1}),
  }

  static args = {
    word1: Args.string({description: 'word1 is to RESULT as word2 is to word3'}),
    word2: Args.string({description: 'word1 is to RESULT as word2 is to word3'}),
    word3: Args.string({description: 'word1 is to RESULT as word2 is to word3'}),
  }

  public async run(): Promise<void> {
    const {flags, args} = await this.parse(Analogy)
    const vectorsFilePath = './data/vectors.txt'

    const model = await loadModel(vectorsFilePath)

    this.log(model.analogy(args.word1, [args.word2, args.word3], flags.size))
  }
}
