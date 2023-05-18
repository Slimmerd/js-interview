//  Preorder

const dfsIterativePreorder = (root) => {
  const stack = [root],
    traversed = [];
  let curr;

  while (stack.length) {
    curr = stack.pop();
    traversed.push(curr.val);
    if (curr.right) stack.push(curr.right);
    if (curr.left) stack.push(curr.left);
  }

  return traversed;
};


// In order

const dfsIterateInOrder = (root) => {
  const stack = [],
    traversed = [];
  let curr = root;

  while (stack.length || curr) {
    while (curr) {
      stack.push(curr);
      curr = curr.left;
    }
    curr = stack.pop();
    traversed.push(curr.val);
    curr = curr.right;
  }

  return traversed;
};

// Post order

const dfsIterativePostorder = (root) => {
  const s1 = [root],
    s2 = [],
    traversed = [];
  let curr;

  while (s1.length) {
    curr = s1.pop();
    if (curr.left) s1.push(curr.left);
    if (curr.right) s1.push(curr.right);
    s2.push(curr);
  }

  while (s2.length) {
    curr = s2.pop();
    traversed.push(curr.val);
  }

  return traversed;
};