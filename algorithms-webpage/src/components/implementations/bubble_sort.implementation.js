// File: bubble_sort.implementation.js
// Author: Trever Hall
// Creation Date: 10/11/2021
// Description: an implementation of bubble sort that returns instructions for animating the algorithm.

// instructions are in the form: [ [parameters...], "commandString" ]
// where [parameters...] are the list of needed data to execute the command,
// and "commandString" is the command to perform.
// commands include: 
    // "compare" - the parameters are a list of indexes to color.
    // "swap" - the parameters are the two indexes to swap.


export function getBubbleSortAnimations(array) {
    const animations = []

    // If the array is of size 1 or less return.
    if (array.length <= 1) {return animations}

    bubbleSortHelper(array, animations)

    return animations.reverse()
}

function bubbleSortHelper(array, animations) {
    let temp = 0
    // Outer loop gives us the number, i, of numbers already bubbled to the right.
    for(let i = 0; i < array.length; i++) {
        // Compare the jth and j+1th index in array, and bubble the largest toward the right.
        for(let j = 0; j < (array.length - 1) - i; j++) {
            // Push comparison here of index j and j+1.
            animations.push([[j, j+1], "compare"])
            // If number on the left is larger, then swap them.
            if(array[j] > array[j+1]) {
                animations.push([[j, j+1], "swap"])
                temp = array[j+1]
                array[j+1] = array[j]
                array[j] = temp
            }
        }
    }
}