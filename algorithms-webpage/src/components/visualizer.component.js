import { Box, Button, FormLabel, Slider, Toolbar } from '@mui/material'
import { width } from '@mui/system'
import * as React from 'react'
import {useState} from 'react'
import { getMergeSortAnimations } from './animations/merge_sort'
let maxArraySize = 0
let min = 5 
let max = 1000


const VisualizerComponent = props => {

    // ************************** //
    // *** DEFINE REACT HOOKS *** //
    // ************************** //
    const reference = React.useRef();
    const [dimensions, setDimensions] = React.useState({ width: 0, height: 0 })
    const [arraySize, setArraySize] = React.useState(0)
    const [sliderI, setSliderI] = React.useState(0)
    const [speed, setSpeed] = React.useState(0)
    const [data, setData] = useState([500])

    // OnMount Hook:
    //   Get the dimesions of the visualizer container 
    //   and add event handler for window resize.
    React.useEffect(() => {

        // Create eventHandler
        function handleResize() {
            if (reference.current) {
                setDimensions({
                    width: reference.current.offsetWidth,
                    height: reference.current.offsetHeight
                })
                // At max array size each bar is 3px wide (1px margin on sides and 1px bar),
                // thus divide width by three to get the maxArraySize that will fit on the screen.
            }
        }
        handleResize()

        // Add eventHander and initialize
        window.addEventListener('resize', handleResize)
        init()

        // Clean up event handler.
        return () => {
            window.removeEventListener('resize', handleResize)
        }
	}, [])

    React.useEffect(() => {
        maxArraySize = Math.floor(dimensions.width/4)
        if (arraySize > maxArraySize) {
            setArraySize(maxArraySize)
        }
    }, [dimensions])

    React.useEffect(() => {
        updateData()
    }, [arraySize])


    // ***************** //
    // *** FUNCTIONS *** //
    // ***************** //
    // function to update the array with new random data.
    const handleResetData = () => {
        updateData()
    }

    const handleChangeArraySize = (event, newValue) => {
        setArraySize(newValue)
    }

    const handleChangeSliderI = (event, newValue) => {
        setSliderI(newValue)
    }

    const handleChangeSpeed = (event, newValue) => {
        setSpeed(newValue)
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
        //Todo: run the animations that are returned from the switch statement.
    }




    // ************************ //
    // *** HELPER FUNCTIONS *** //
    // ************************ //
    function getArray() {
        let array = []

        // Push new integers into array
        for (let i = 0; i < arraySize; i++) {
            array.push(Math.floor(Math.random() * (max - min + 1) + min))
        }
        return array
    }

    // generates a new array and sets 'data' to it.
    function updateData() {
        setData(getArray())
    }
    
    function init() {
        setArraySize(maxArraySize)
    }

    // ****************************** //
    // *** DOM ELEMENTS TO RETURN *** //
    // ****************************** //
    return (
        <Box>
            <hr/>
            {/* visualization is in here */}
            <Box ref={reference}
                sx={{ 
                    height: `${window.innerHeight/2}px`,
                    justifyItems: 'center'
                 }}
            >
                {data.map( (value, idx) => (
                    <Box  key={idx}
                        sx={{ 
                            display: 'inline-block',
                            backgroundColor: 'turquoise',
                            minWidth: '2px',
                            width: `${((maxArraySize*4)-(arraySize*2))/arraySize}px`,
                            margin: '0 1px',
                            height: `${dimensions.height*(value/max)}px`}}
                    >
                    </Box>
                ))}
            </Box>

            {/* visualization controls are in this box */}
            <Toolbar>

                {/* RunAlgorithm Button. */}
                <Button onClick={runAlgorithm} sx={{m: '0px', size: {xs: 'small'}}}>
                    Run Algorithm
                </Button>

                {/* Slider to change array size. */}
                <FormLabel sx={{ m: '0px 10px 0px 15px' }}> Change Array Size: </FormLabel>
                <Slider 
                    onChange={handleChangeSliderI}
                    onChangeCommitted={handleChangeArraySize} 
                    min={10} 
                    max={maxArraySize}
                    size='small' 
                    sx={{ width: 100 }}  
                    value={sliderI}
                    valueLabelDisplay="auto"
                    > </Slider>
                <Box sx={{flexGrow: 1}} />

                {/* Button to generate new data. */}
                <Button id='newDataButton' onClick={handleResetData} sx={{ size: {xs: 'small'}}} >
                    Generate New Data
                </Button>

                {/* Slider to change the animation speed. */}
                <FormLabel sx={{ m: '0px 10px 0px 15px' }}> Change Speed: </FormLabel>
                <Slider onChange={handleChangeSpeed} size='small' sx={{width: 100}}
                    valueLabelDisplay="auto"> </Slider> 
            </Toolbar>
            <hr/>

            {/* debug data. */}
            <Box>
                <ul>
                    <li>
                        - Max array size = {maxArraySize}
                    </li>
                    <li>
                        - Width = {dimensions.width}
                    </li>
                    <li>
                        - arraySize = {arraySize}
                    </li>
                </ul>
            </Box>
        </Box>
        
    )
}

export default VisualizerComponent