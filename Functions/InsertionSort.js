function insertionSort(array)
{
    const{ length } = array;
    let temp;
    console.log('Unsorted Array: ' + array);
    console.log('Array Length: ' + length );

    for ( let i = 0 ; i < length ; i++ )
    {
        let j = i;
        temp = array[i];
        while ( j > 0 && array[j - 1] > temp )
        {
            array[j] = array[j - 1];
            j--;
        }
        array[j] = temp;
    }
    console.log('Sorted Array: ' + array);
}

// This is our Unsorted Array
var arr = [234, 43, 55, 63, 5, 6, 235, 547, 2, 37];

// Call the Sort Fuction
insertionSort(arr);