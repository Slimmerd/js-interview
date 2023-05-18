function linearSearch(array, seekElement) {
  const foundIndices = [];

  array.forEach((element, index) => {
    if (element === seekElement) {
      foundIndices.push(index);
    }
  });

  return foundIndices;
}
