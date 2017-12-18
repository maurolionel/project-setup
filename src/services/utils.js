export const convertStringToNumber = string => parseInt(string, 10);
export const replaceMiddleDashWithSpace = string => string.replace(/-/g, ' ');
export const replaceSpaceWithMiddleDash = string => string.replace(/\s+/g, '-');
export const normalizePrices = (accumulator, nextValue) => ({ ...accumulator, ...nextValue });
