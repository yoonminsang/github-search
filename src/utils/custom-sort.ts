const checkHangul = (str: string) => {
  const korean = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/;
  return korean.test(str);
};

const checkEnglish = (str: string) => {
  const english = /[a-zA-Z]/;
  return english.test(str);
};

const choosePriotry = (str: string) => {
  if (checkHangul(str)) {
    return 1;
  }
  if (checkEnglish(str)) {
    return 2;
  }
  return 3;
};

export const customSort = (a: string, b: string): number | boolean | void => {
  if (a[0] === b[0]) {
    customSort(a.slice(1), b.slice(1));
  } else {
    const [aPriority, bPriority] = [choosePriotry(a[0]), choosePriotry(b[0])];
    if (aPriority === bPriority) {
      return a.localeCompare(b);
    }
    return aPriority - bPriority;
  }
};
