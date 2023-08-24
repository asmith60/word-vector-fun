import {Command, Flags} from '@oclif/core'
import {existsSync} from 'node:fs'
import {promisify} from 'node:util'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import * as w2v from 'word2vec'
const word2vec = promisify(w2v.word2vec)
const loadModel = promisify(w2v.loadModel)

export default class Train extends Command {
  static description = 'Train a model with supplied text file'

  static examples = [
    '<%= config.bin %> <%= command.id %> train -f /path/to/file.txt',
  ]

  static flags = {
    file: Flags.string({char: 'f', description: 'file containing text used for training', required: true}),
  }

  public async run(): Promise<void> {
    const {flags} = await this.parse(Train)
    const vectorsFilePath = './data/vectors.txt'

    if (!existsSync(flags.file)) {
      this.error(`${flags.file} does not exist`)
    }

    await word2vec(flags.file, vectorsFilePath, {size: 300})

    const model = await loadModel(vectorsFilePath)

    console.log(`SIZE: ${model.size}`)
    console.log(`WORDS: ${model.words}`)
  }
}
