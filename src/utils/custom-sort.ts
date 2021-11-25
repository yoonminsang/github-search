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
    return customSort(a.slice(1), b.slice(1));
  } else {
    const [aPriority, bPriority] = [choosePriotry(a[0]), choosePriotry(b[0])];
    if (aPriority === bPriority) {
      if (aPriority === 2) return a.toLowerCase().localeCompare(b.toLowerCase());
      return a.charCodeAt(0) - b.charCodeAt(0);
    }
    return aPriority - bPriority;
  }
};
