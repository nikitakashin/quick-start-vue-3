export const textFragment = (text, maxLength) => {
  if (typeof text !== 'string' || typeof maxLength !== 'number') return text;
  if (text.length <= maxLength) return text;

  let newText = text.substring(0, maxLength - 3);
  const lastSpace = newText.lastIndexOf(' ');

  if (lastSpace < 0) {
    return newText + '...';
  }

  return newText.substring(0, lastSpace) + '...';
};

export const keyBy = (arr, field) => {
  return arr.reduce((buff, item) => {
    buff[item[field]] = item;
    return buff;
  }, {});
};
