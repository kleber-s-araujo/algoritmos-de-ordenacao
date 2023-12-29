function bubbleSort(array)
{
    const{ length } = array;
    console.log('Array Length: ' + length );

    for( let i = 0 ; i < length ; i++ )
    {
        for( let j = 0 ; j < length - 1 ; j++ )
        {
            if( array[j] > array[j+1] )
            {
                swap(array, j, j + 1);
            }
        }
    }
    console.log('Sorted Array: ' + array);
}

function swap(array, a , b)
{
    let x = array[a];
    array[a] = array[b];
    array[b] = x;
}

// This is our Unsorted Array
var arr = [234, 43, 55, 63, 5, 6, 235, 547, 2, 37];
console.log('Unsorted Array: ' + arr);

// Call the Sort Fuction
bubbleSort(arr);