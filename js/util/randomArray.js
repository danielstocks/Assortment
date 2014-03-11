/*
 * randomArray.js
 * --------
 * Totoally. Random.
 *
 */

function randomArray(n) {
  n = n || parseInt(document.getElementById("num-items").value) || 512
  return shuffle(range(n));
}
