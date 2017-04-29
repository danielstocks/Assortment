function insertionSort(items) {
    var // number of items in the array
    len     = items.length;                          // index into sorted section

    var // the value currently being compared
    value;

    var // index into unsorted section
    i;

    var j;
    for (i=0; i < len; i++) {
        // store the current value because it may shift later
        value = items[i];
        /*
         * Whenever the value in the sorted section is greater than the value
         * in the unsorted section, shift all items in the sorted section over
         * by one. This creates space in which to insert the value.
         */
        for (j=i-1; j > -1 && items[j] > value; j--) {
            items[j+1] = items[j];
            swaps.push([items.slice(0), value, items[j]]);
        }

        items[j+1] = value;
    }
    swaps.push([items.slice(0), value, items[j]]);
    return items;
}
