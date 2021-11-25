import { checkEnglish, checkHangul } from './check-language';

const choosePriotry = (str: string) => {
  if (checkHangul(str)) {
    return 1;
  }
  if (checkEnglish(str)) {
    return 2;
  }
  return 3;
};

export const customSort = (a: string, b: string): any => {
  if (a[0] === b[0]) {
    customSort(a.slice(1), b.slice(1));
  } else {
    const [aPriority, bPriority] = [choosePriotry(a[0]), choosePriotry(b[0])];
    if (aPriority === bPriority) {
      return a.toLocaleLowerCase().charCodeAt(0) - b.toLocaleLowerCase().charCodeAt(0);
    }
    return aPriority - bPriority;
  }
};
