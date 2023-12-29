function bubbleSort(array, compareFn = defaultCompare)
{
    const{ lenght } = array;
    for( let i = 0 ; i < lenght ; i++ )
    {
        for( let j = 0 ; j < lenght - 1 ; j++ )
        {
            if(compareFn(array[j], array[j+1]) === Compare.BIGGER_THAN)
            {
                swap(array, j, j + 1);
            }
        }
    }
}