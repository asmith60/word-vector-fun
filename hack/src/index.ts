/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { readFileSync, writeFileSync } from 'fs';
import { promisify } from 'util';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import * as w2v from 'word2vec';
const word2vec = promisify(w2v.word2vec);
const loadModel = promisify(w2v.loadModel);

async function main() {
  const dataFiles = ['./data/01.txt', './data/02.txt', './data/03.txt', './data/04.txt', './data/05.txt']
  const corpusFilePath = './temp/corpus.txt';
  const vectorsFilePath = './temp/data.txt';

  let text = '';
  for (const dataFile of dataFiles) {
  text = text.concat(readFileSync(dataFile, 'utf-8').toString());
  }

  const sanitizedText = sanitize(text);

  writeFileSync(corpusFilePath, sanitizedText);

  await word2vec(corpusFilePath, vectorsFilePath, {size: 300});

  const model = await loadModel(vectorsFilePath);

  console.log("SIZE: ", model.size);
  console.log("WORDS: ", model.words);
}

function sanitize(text: string): string {
  return text.toLowerCase().replace(/[^A-Za-zА-Яа-яЁёЇїІіҐґЄє0-9-]|\s]/g, " ").replace(/\s{2,}/g, " ");
}

main().then(() => {
  console.log('SUCCESS!!!')
}).catch((e) => {
  console.error('FAILURE!!!');
  console.log((e as Error).stack);
});
