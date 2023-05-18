function breadthFirstSearch(root) {
  const result = [];
  const queue = [root];
  while (queue.length > 0) {
    const current = queue.shift();
    if (current === null) continue;
    result.push(current.value);
    for (const child of current.children) {
      queue.push(child);
    }
  }
  return result;
}
