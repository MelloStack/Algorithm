def searchLess(arr):
    smallest = arr[0]
    smallest_index = 0
    for i in range(1, len(arr)):
        if arr[i] < smallest:
            smallest = arr[i]
            smallest_index = i
    return smallest_index


def orderArray(arr):
    newArr = []

    for i in range(len(arr)):
        less = searchLess(arr)
        newArr.append(arr.pop(less))
    return newArr


array = [0,5,10,2,6,3,9,7,8,4,1]

print(orderArray(array))