export function checkOrder(question, sequence) {
  return sequence.length === question.items.length && question.items.every((item, i) => sequence[i] === item);
}
