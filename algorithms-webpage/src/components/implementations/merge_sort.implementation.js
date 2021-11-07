// File: merge_sort.implementation.js
// Author: Trever Hall
// Creation Date: 10/11/2021
// Description: an implementation of mergeSort that uses
    // an auxillary array. This acts like a buffer allowing
    // the array to be copied once. Then mergeSortHelper 
    // swaps which array is considered the main array and the aux
    // when recursively called below. Thus as the call stack collapses,
    // they alternate updating eachother with the next sorted portion.
    // *** This implementation returns a list of animation instructions
    // *** to go from the original array to the sorted one, NOT an array.

// instructions are in the form: [ [parameters...], "commandString" ]
// where [parameters...] are the list of needed data to execute the command,
// and "commandString" is the command to perform.
// commands include: 
    // "compare" - the parameters are a list of indexes to color.
    // "write" - the parameters are an index and a value in the form -> [writeTo, value].  

export function getMergeSortAnimations(array) {
    const animations = []

    // If the array is of size 1 or less return.
    if (array.length <= 1) {return animations}

    // Else perform mergeSort
    const auxArray = array.slice()
    mergeSortHelper(array, 0, array.length - 1, auxArray, animations)
    return animations.reverse()
}

// Recursive division part of the algorithm.
function mergeSortHelper(
    array, startI, endI, auxArray, animations
    ) {
    // base case
    if (startI === endI) return

    const middleI = Math.floor((startI + endI) / 2)
    mergeSortHelper(auxArray, startI, middleI, array, animations)
    mergeSortHelper(auxArray, middleI + 1, endI, array, animations)
    merge(array, startI, middleI, endI, auxArray, animations)
}
  
function merge(
    array, startI, middleI, endI, auxArray, animations
) {
    let arrayI = startI
    let leftI = startI
    let rightI = middleI + 1

    // Compares left and right indicies
    // overwriting the next index in the original array with the lower value
    // looping until one of the sides runs out of numbers. 
    while (leftI <= middleI && rightI <= endI) {
        // Add to animations of what the algorithm is comparing next.
        animations.push([[leftI, rightI], "compare"])

        // if the leftI is lower use it next.
        if (auxArray[leftI] <= auxArray[rightI]) {
            // Add to animations an index and the value to update it with.
            animations.push([[arrayI, auxArray[leftI]], "write"])
            array[arrayI++] = auxArray[leftI++]
        } 
        // else use the rightI next.
        else {
            // Add to animations an index and the value to update it with.
            animations.push([[arrayI, auxArray[rightI]], "write"])
            array[arrayI++] = auxArray[rightI++]
        }
    }

    // *** The next two loops check sides for remaining elements,      *** //
    // *** and finishes overwriting the portion of the original array. *** //

    // Check left side for leftovers.
    while (leftI <= middleI) {
        animations.push([[arrayI, auxArray[leftI]], "write"])
        array[arrayI++] = auxArray[leftI++]
    }
    // Check right side for leftovers.
    while (rightI <= endI) {
        animations.push([[arrayI, auxArray[rightI]], "write"])
        array[arrayI++] = auxArray[rightI++]
    }
}