const convertStringToNumber = string => parseInt(string, 10);
const replaceMiddleDashWithSpace = string => string.replace(/-/g, ' ');
const replaceSpaceWithMiddleDash = string => string.replace(/\s+/g, '-');

export {
  convertStringToNumber,
  replaceMiddleDashWithSpace,
  replaceSpaceWithMiddleDash
};
