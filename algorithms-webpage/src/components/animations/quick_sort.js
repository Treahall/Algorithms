


export function getQuickSortAnimations(array) {
    const animations = []

    // If the array is of size 1 or less return.
    if (array.length <= 1) return animations

    quickSortHelper(array, 0, array.length - 1, animations)

    return animations.reverse()
}

function quickSortHelper(array, startI, endI, animations) {
    // base case
    if ((endI - startI) < 2) {return}

    const middleI = Math.floor((startI + endI) / 2)
    quickSortHelper(array, startI, middleI - 1, animations)
    quickSortHelper(array, middleI + 1, endI, animations)
    //quickSort(array, startI, middleI, endI, animations)
}

function quickSort(a, startI, middleI, endI, animations) {
    // Pick the pivot using the median-of-three method
    let sortedMedianOfThree = sortPivotCandidates([a[startI], a[endI], a[middleI]])
    // Assign the startI, middleI, and endI as the sorted-median-of three.
    // Note: In this step middle and end are swapped to move the pivot to the end of the array!
    //! Changing values of the array!
    a[startI] = sortedMedianOfThree[0]
    a[middleI] = sortedMedianOfThree[2]
    a[endI] = sortedMedianOfThree[1]

    let pivot = a[endI]
    let itemFromLeft = {}
    let itemFromRight = {}
    let done = false
    let temp = {}

    while(done === false){
        // Get the first itemFromLeft greater than out pivot.
        for(let i = startI; i < endI; i++) {
            if(a[i] > pivot) {
                itemFromLeft = { index: a[i], value: i}
                break
            }
        }
        // Get the first itemFromRight less than our pivot.
        for(let i = endI; i > startI; i--) {
            if(a[i] < pivot) {
                itemFromRight = { index: a[i], value: i}
                break
            }
        }

        // If the index of itemFromLeft is greater than the index 
        // of itemFromRight then we are done and need to swap itemFromLeft
        // with out pivot and set done to true.
        // This swaps the values in the actual array, a, only.
        if(itemFromLeft.index > itemFromRight.index) {
            //! Comparing index of itemFromLeft with endI
            animations.push([[itemFromLeft.index, endI], "compare" ])
            //! Swap array values for itemFromLeft.index and endI 
            animations.push([[itemFromLeft.index, endI], "swap"])
            a[itemFromLeft.index] = pivot
            a[endI] = itemFromLeft.value
            done = true
        }
        // else swap itemFromLeft and itemFromRight
        // This swaps function values and the actual values in the array, a.
        else if (itemFromLeft.index < itemFromRight.index) {
            //! Comparing the indexes of itemFrom's
            animations.push([[itemFromLeft.index, itemFromRight.index], "compare" ])
            //! swap array values for indexes of itemFrom's.
            animations.push([[itemFromLeft.index, itemFromRight.index], "swap" ])
            a[itemFromLeft.index] = itemFromRight.value
            a[itemFromRight.index] = itemFromLeft.value
        }
    }
}


function sortPivotCandidates(pivots) {
    pivots.sort(function (a, b) {  return a - b;  })
    return pivots
}