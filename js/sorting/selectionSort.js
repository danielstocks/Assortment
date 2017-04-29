((exports => {

function selectionSort(items){
  var len = items.length;
  var min;

  for (i=0; i < len; i++){

    //set minimum to this position
    min = i;

    //check the rest of the array to see if anything is smaller
    for (j=i+1; j < len; j++){
      if (items[j] < items[min]){
        min = j;
        swaps.push([items.slice(0), j]);
      }
    }

    //if the minimum isn't in the position, swap it
    if (i != min){
      swap(items, i, min);
    }
  }

  return items;
}

function swap(items, firstIndex, secondIndex){
  var temp = items[firstIndex];
  items[firstIndex] = items[secondIndex];
  items[secondIndex] = temp;
  swaps.push([items.slice(0), secondIndex, firstIndex]);
}

exports.selectionSort = selectionSort

}))(window);
