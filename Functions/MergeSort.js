function mergeSort(array)
{
    const{ length } = array;
    console.log('Unsorted Array: ' + array);
    console.log('Array Length: '   + length );

    if ( length > 1 )
    {
        const middle = Math.floor( length / 2 );
        const left   = mergeSort(array.slice(0, middle - 1));
        const right  = mergeSort(array.slice(middle, length));
        array = merge(left, right);
    }
    return array;
}

function merge(left, right) 
{
    let arr = [];
    // Break out of loop if any one of the array becomes empty
    while (left.length && right.length) {
        // Pick the smaller among the smallest element of left and right sub arrays 
        if (left[0] < right[0]) {
            arr.push(left.shift())  
        } else {
            arr.push(right.shift()) 
        }
    }
    
    // Concatenating the leftover elements
    // (in case we didn't go through the entire left or right array)
    return [ ...arr, ...left, ...right ]
}

// This is our Unsorted Array
var arr = [234, 43, 55, 63, 5, 6, 235, 547, 2, 37];

// Call the Sort Fuction
arr = mergeSort(arr);
console.log('Sorted Array: ' + arr);