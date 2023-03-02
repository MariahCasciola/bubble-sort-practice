function bubbleSort(compare, elements) {
  if (Array.isArray(elements)) {
    let inOrder;

    do {
      inOrder = true; //array is in order, until the difference of right and left is zero

      for (
        let index = 0, length = elements.length - 1;
        index < length;
        index++
      ) {
        const leftElement = elements[index];
        const rightElement = elements[index + 1];

        if (compare(leftElement, rightElement) > 0) {
          elements[index] = rightElement;
          elements[index + 1] = leftElement;
          inOrder = false; // The array wasn't in order becuase the differnce is still more than, so swap elements and then check it again.
        }
      }
    } while (inOrder === false);
  }
  return elements;
}

module.exports = bubbleSort;
