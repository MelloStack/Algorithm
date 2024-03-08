# This is a algorithm for ordered selection

### O(log n)

## What this do?

# RESUME

### Get the smallest value and the index of him, return in a function, create other function to push the values to a new sort array

## GET SMALLEST VALUE

### Create a new function named getSmallestValue, that have an arr param

### This take the smallest number, do a loop in the arr, test if the loop index is minor than the smallest number, if true change the smallest number to the looped index and change the smallest_index to i(the loop index) than outside of the loop, return the smallest_index

### This function will only be called in the ordArray

## ORDERER

### create a new ordArray function with arr as param
### create a new array, add a while, (arr.length < 0), now call the smallestValue function and the param will be the param of this function, now just push the the value to the new arr we created,

### remeber, you have to use the splice, otherwise will do not sort the values
