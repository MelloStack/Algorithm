import math

def binarySearch(arr, item):
    smallest = arr[0]
    higher = len(arr) - 1
    count = 0

    while smallest <= higher:
        middle = math.floor((smallest + higher) / 2)
        guess = arr[middle]

        if(guess == item):
            print("Item Achado: ", guess, " Tentativas: ", count)
            return
        
        if(guess > item):
            higher = middle - 1
        
        if(guess < item):
            smallest = middle + 1
        count += 1

newArray = [1,2,3,4,5,6,7,8,9,10,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]

binarySearch(newArray, 4)