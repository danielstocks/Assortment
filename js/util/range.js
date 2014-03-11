/*
 * range.js
 * --------
 * Generate a range of numbers
 * starting from 1 to no
 * and return them in an array
 *
 */
function range(n) {
  var items = [];
  for (var i = 1; i < n + 1; i++) {
    items.push(i);
  }
  return items;
}
