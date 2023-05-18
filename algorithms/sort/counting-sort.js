// Time Complexity: O(N + K) where N is the number of elements in the input array and K is the range of input. 
// Auxiliary Space: O(N + K)

function sort(arr) {
  let n = arr.length;

  // The output character array that will have sorted arr
  let output = Array.from({ length: n }, (_, i) => 0);

  // Create a count array to store count of individual
  // characters and initialize count array as 0
  let count = Array.from({ length: 256 }, (_, i) => 0);

  // store count of each character
  for (let i = 0; i < n; ++i) ++count[arr[i].charCodeAt(0)];
  // Change count[i] so that count[i] now contains actual
  // position of this character in output array
  for (let i = 1; i <= 255; ++i) count[i] += count[i - 1];

  // Build the output character array
  // To make it stable we are operating in reverse order.
  for (let i = n - 1; i >= 0; i--) {
    output[count[arr[i].charCodeAt(0)] - 1] = arr[i];
    --count[arr[i].charCodeAt(0)];
  }

  // Copy the output array to arr, so that arr now
  // contains sorted characters
  for (let i = 0; i < n; ++i) arr[i] = output[i];
  return arr;
}
