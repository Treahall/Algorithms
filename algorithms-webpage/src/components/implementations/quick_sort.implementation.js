// Implemetation adapted from version found at: https://stackabuse.com/quicksort-in-javascript/


export function getQuickSortAnimations(array) {
    const animations = []

    // If the array is of size 1 or less return.
    if (array.length <= 1) {return animations}

    quickSortHelper(array, 0, array.length - 1, animations)

    return animations.reverse()
}

function quickSortHelper(array, startI, endI, animations) {
    if (startI >= endI) {return}

    let index = partition(array, startI, endI, animations)
    
    quickSortHelper(array, startI, index - 1, animations)
    quickSortHelper(array, index + 1, endI, animations)
}

function partition(array, startI, endI, animations){
    const pivotValue = array[endI]
    let pivotIndex = startI
    for (let i = startI; i < endI; i++) {
        // Comparing array[i] with array[endI]
        animations.push([[i, i+1], "compare"])
        if (array[i] < pivotValue) {
            // Swap
            [array[i], array[pivotIndex]] = [array[pivotIndex], array[i]]
            // Swapping positions array[i] and array[pivotIndex]
            animations.push([[i, pivotIndex], "swap"])
            
            // Move up the pivotIndex
            pivotIndex++ 
        }
    }
    
    // Swap the pivot with the element at pivotIndex
    [array[pivotIndex], array[endI]] = [array[endI], array[pivotIndex]]
    // Swapping positions array[pivotIndex] and array[endI]
    animations.push([[pivotIndex, endI], "swap"])

    return pivotIndex
}