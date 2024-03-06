const getSmallestValue = (arr) => 
{
    let smallest = arr[0]
    let smallest_index = 0
    
    for(let i = 0; i < arr.length; i++)
    {
        if(arr[i] < smallest)
        {
            smallest = arr[i]
            smallest_index = i
        }
    }
    
    return smallest_index
}

const ordArray = (arr) => 
{
    let newArr = []
    
    while(arr.length > 0)
    {
          let less = getSmallestValue(arr)
        
          newArr.push(arr.splice(less, 1)[0])
    }
  
    return newArr
}

console.log(ordArray([0,5,10,12,11,9,3,7,6,8,4,1,2]))