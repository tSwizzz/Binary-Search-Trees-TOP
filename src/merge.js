export default mergeSortRecursion;

//sorts array via merge sort
function mergeSortRecursion(arr) {
    if(arr.length == 1 || arr.length == 0) return arr;

    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid, arr.length);

    return merge(mergeSortRecursion(left), mergeSortRecursion(right));
}

function merge(leftArr, rightArr) {
    let result = [];
    let iL = 0;
    let iR = 0;
    
    while(iL < leftArr.length && iR < rightArr.length) {
        if(leftArr[iL] < rightArr[iR]) {
            result.push(leftArr[iL]);
            iL++
        } else {
            result.push(rightArr[iR]);
            iR++;
        }
    }

    while(iL < leftArr.length) {
        result.push(leftArr[iL]);
        iL++;
    }

    while(iR < rightArr.length) {
        result.push(rightArr[iR]);
        iR++;
    }

    return result = removeDuplicates(result);
}

function removeDuplicates(arr) {
    let newA = [];

    //arr is sorted already
    for(let k = 0; k < arr.length; k++ ) {
        if(arr[k] != arr[k + 1]) {
            newA.push(arr[k]);
        }
    }
    return newA;
}
