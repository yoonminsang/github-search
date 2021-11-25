import { checkHangul } from './check-language';

const initialHangulList = [
  'ㄱ',
  'ㄲ',
  'ㄴ',
  'ㄷ',
  'ㄸ',
  'ㄹ',
  'ㅁ',
  'ㅂ',
  'ㅃ',
  'ㅅ',
  'ㅆ',
  'ㅇ',
  'ㅈ',
  'ㅉ',
  'ㅊ',
  'ㅋ',
  'ㅌ',
  'ㅍ',
  'ㅎ',
];

const basicCode = '가'.charCodeAt(0);
const vowel = 21; // 모음
const consonants = 28; // 자음

export const getHeader = (header: string) => {
  if (checkHangul(header)) {
    const headerCode = header.charCodeAt(0);
    const code = headerCode - basicCode;
    const index = Math.floor(code / vowel / consonants);
    return initialHangulList[index];
  }
  return header.toUpperCase();
};
