// `matched` maps each left item to the right item the child connected it with.
export function checkPairs(question, matched) {
  return question.pairs.every(([left, right]) => matched[left] === right) &&
    Object.keys(matched).length === question.pairs.length;
}
