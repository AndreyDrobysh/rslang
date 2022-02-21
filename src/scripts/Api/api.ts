const address = 'https://roling-task-rslang.herokuapp.com';

const wordsUrl = `${address}/words`;

export interface Word {
  id: string,
  group: number,
  page: number,
  word: string,
  image: string,
  audio: string,
  audioMeaning: string,
  audioExample: string,
  textMeaning: string,
  textExample: string,
  transcription: string,
  textExampleTranslate: string,
  textMeaningTranslate: string,
  wordTranslate: string
}

let cachedWords: Word[] | null = null;

export async function getWords(group: number, page: number) {
  const response = await fetch(`${wordsUrl}?group=${group}&page=${page}`, { method: 'GET' });
  const words = await response.json() as Word[];
  cachedWords = words;
  return words;
}
