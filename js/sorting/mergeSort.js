((exports => {

function merge(left, right){
    var result  = [];
    var il      = 0;
    var ir      = 0;

    while (il < left.length && ir < right.length){
        if (left[il] < right[ir]){
            result.push(left[il++]);
        } else {
            result.push(right[ir++]);
        }
    }
    return result.concat(left.slice(il)).concat(right.slice(ir));
}
function mergeSort(items){
    if (items.length < 2) {
        return items;
    }

    var middle = Math.floor(items.length / 2);
    var left    = items.slice(0, middle);
    var right   = items.slice(middle);
    var params = merge(mergeSort(left), mergeSort(right));

    // Add the arguments to replace everything
    // between 0 and last item in the array
    params.unshift(0, items.length);
    items.splice(...params);
    return items;
}

exports.mergeSort = mergeSort;

}))(window);
