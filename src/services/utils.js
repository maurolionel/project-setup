const convertStringToNumber = string => parseInt(string, 10);
const replaceMiddleDashWithSpace = string => string.replace(/-/g, ' ');

export {
  convertStringToNumber,
  replaceMiddleDashWithSpace
};
