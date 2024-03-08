# This is a Binary Search Algorithm

## O(log n)

# Resume

### You have a array of 10 elements, you have to create a function with the param (arr, item) => item will be the value you want to get
### you have to get the middle of the array, the search will always guess in the middle, if the guess is to high
### you will delete the rest above the guess, if is to low, you will delete the rest below of the guess

### inside the function, will exist 2 vars, (smallest), (higher) => the smallest will be the index of 0
### higher will be the lenght of the arr - 1, the inside of while you will create more 2 vars,
### (middle, guess) => middle will be (smallest + higher) / 2, guess will be => the arr with the index of middle
### now you can create the ifs statemens
### if is equal item => return
### if (guess > item) => the higher will be change to middle - 1, let pretend the guess is 5, if guess > item, than 6, 7 or 8 is higher too
### now the higher value will be the guess(4) because 5 and above is too high

### if (guess < item) => the smallest will be change to middle + 1
