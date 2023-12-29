function selectionSort(array)
{
    const{ length } = array;
    let indexMin;
    console.log('Unsorted Array: ' + array);
    console.log('Array Length: ' + length);

    for ( let i = 0; i < length - 1 ; i++ )
    {
        indexMin = i;
        for ( let j = i ; j < length ; j++ )
        {
            if ( array[indexMin] > array[j] )
            {
                indexMin = j;
            }
        }
        if ( i !== indexMin )
        {
            swap(array, i, indexMin);
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

// Call the Sort Fuction
selectionSort(arr);