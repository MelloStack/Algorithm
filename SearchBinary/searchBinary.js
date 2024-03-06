const binarySearch = (arr, item) => 
{
    let smallest = arr[0]
    let higher = arr.length
    let count = 0

    while(smallest <= higher)
    {
        let middle = Math.round((smallest + higher) / 2)
        let guess = arr[middle]

        if(guess == item)
        {
            console.log("Item Achado: ", guess," Tentativas: ",count)
            return 
        }

        else if(guess < item)
        {
            smallest = middle + 1
        }
        
        else if(guess > item)
        {
            higher = middle - 1
        }

        count++
    }

}

const array = [1,2,3,4,5,6,7,8,9,10,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]

binarySearch(array, 12)