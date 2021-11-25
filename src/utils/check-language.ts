export const checkHangul = (str: string) => {
  const korean = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/;
  return korean.test(str);
};

export const checkEnglish = (str: string) => {
  const english = /[a-zA-Z]/;
  return english.test(str);
};
