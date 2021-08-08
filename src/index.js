module.exports = function check(str, bracketsConfig) {
  let stack = [];
  let openBrackets = [];
  let closeBrackets = [];
  let openIndex;
  let closeIndex;

  bracketsConfig.map(item => {
    openBrackets.push(item[0]);
    closeBrackets.push(item[1]);
  })

  if (str.length % 2 !== 0) {
    return false;
  }

  for (let i of str) {
    openIndex = openBrackets.indexOf(i);
    closeIndex = closeBrackets.indexOf(i);
    let topElement = stack[stack.length - 1];

    if (openBrackets.includes(i)) {
      (closeIndex === openIndex && topElement === closeIndex) ? stack.pop(): stack.push(openIndex);
    } else(closeIndex === topElement) ? stack.pop() : false;
  }

  return stack.length === 0;
}