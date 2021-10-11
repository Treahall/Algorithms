import { Box, Button, FormLabel, Slider, Toolbar } from '@mui/material'
import { width } from '@mui/system'
import * as React from 'react'
import {useState} from 'react'
import { getMergeSortAnimations } from './animations/merge_sort'
let delay = 50
let array = []
let arraySize = 80
let min = 5 
let max = 1000


const VisualizerComponent = props => {
    // load random data into 'array' and use it to initialize our data.
    resetArray()
    const [data, setData] = useState(array)

    const reference = React.useRef();
    const [dimensions, setDimensions] = React.useState({ width: 0, height: 0 })

    // gets the dimesions of the visualizer component 
    React.useEffect(() => {
        function handleResize() {
            if (reference.current) {
                setDimensions({
                    width: reference.current.offsetWidth,
                    height: reference.current.offsetHeight
                })
            }
        }
        window.addEventListener('resize', handleResize)
        handleResize()

        return () => {
            window.removeEventListener('resize', handleResize)
        }
	}, [])

    

    // function to update the array with new random data.
    const resetData = () => {
        resetArray()
        setData(array)
    }

    //Todo: generate a random array of data as a React hook, so the visualization updates when the data changes.
    //Todo: Connect that data to the current algorithm.
    const runAlgorithm = () => {
        // Determine what algorithm to use.
        switch(props.algorithm) {
            case "merge-sort":
                setData(getMergeSortAnimations(data))
                break
            case "bubble-sort":
                // code block
                break
            case "quick-sort":
                // code block
                break
            case "insertion-sort":
                // code block
                break
            default:
                // code block
        }
    }
    

    return (
        <Box>

            <hr/>
            {/* visualization is in here */}
            <Box ref={reference}
                sx={{ 
                    height: `${window.innerHeight/2}px` 
                 }}
            >
                {data.map( (value, idx) => (
                    <Box  key={idx}
                        sx={{ 
                            display: 'inline-block',
                            backgroundColor: 'turquoise',
                            minWidth: '1px',
                            width: `${(dimensions.width-(arraySize*2)-20)/arraySize}px`,
                            margin: '0 1px',
                            height: `${dimensions.height*(value/max)}px`}}
                    >
                    </Box>
                ))}
            </Box>

            {/* visualization controls are in this box */}
            <Toolbar>
                {/* //Todo: Button to start the animation.
                //Todo: Make a slider to change the speed. */}
                <Button onClick={runAlgorithm} sx={{m: '0px', size: {xs: 'small'}}}>
                    Run Algorithm
                </Button>
                
                <Box sx={{flexGrow: 1}} />
                <Button id='newDataButton' onClick={resetData} sx={{ size: {xs: 'small'}}} >
                    Generate New Data
                </Button>
                <FormLabel sx={{ m: '0px 10px 0px 15px' }}> Change Speed: </FormLabel>
                <Slider aria-label='Change Speed' size='small' sx={{width: 100}}>

                </Slider> 
            </Toolbar>
            <hr/>

        </Box>
        
    )
}



//TODO: Implement the alogorithms.

function resetArray() {
    array = []

    // Push a new integer in r
    for (let i = 0; i < arraySize; i++) {
        array.push(Math.floor(Math.random() * (max - min + 1) + min))
    }
}

export default VisualizerComponent