// File: insertion_sort.implementation.js
// Author: Trever Hall
// Creation Date: 10/11/2021
// Description: an implementation of insertion sort that returns instructions for animating the algorithm.

// instructions are in the form: [ [parameters...], "commandString" ]
// where [parameters...] are the list of needed data to execute the command,
// and "commandString" is the command to perform.
// commands include: 
    // "compare" - the parameters are a list of indexes to color.
    // "swap" - the parameters are the two indexes to swap.


export function getInsertionSortAnimations(array) {
    const animations = []

    insertionSortHelper(array, animations)

    return animations.reverse()
}

function insertionSortHelper(a, animations) {
    // Note: everything before i is already sorted at every iteration.
    for(let i = 1; i < a.length; i++) {
        // If a[i] is NOT sorted, then swap it with the previous number
        // until it is sorted.
        let temp = 0
        for(let j = i; j > 0; j--) {
            // Comparing a[j] with a[j-1]
            animations.push([[j, j-1], "compare"]) 
            if(a[j-1] > a[j]) {
                // Swapping a[j] with a[j-1]
                animations.push([[j , j-1], "swap"])
                temp = a[j]
                a[j] = a[j-1]
                a[j-1] = temp
            }
            else if(a[j] > a[j-1]) {break}
        }
    }
}