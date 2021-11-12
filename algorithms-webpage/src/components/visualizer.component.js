import { Box, Button, FormLabel, Slider, Toolbar } from '@mui/material'
import * as React from 'react'
import { useReducer, useLayoutEffect, useEffect, useState } from 'react'
import { getBubbleSortAnimations } from './implementations/bubble_sort.implementation'
import { getInsertionSortAnimations } from './implementations/insertion_sort.implementation'
import { getMergeSortAnimations } from './implementations/merge_sort.implementation'
import { getQuickSortAnimations } from './implementations/quick_sort.implementation'
let min = 5
let max = 1000

const ACTIONS = {
    GET_NEW_BARS: 'new-bars',
    SET_ANIMATIONS: 'set-animations',
    SET_BARS: 'set-bars',
    RUN_TRUE: 'run-true',
    RUN_FALSE: 'run-false',
    RESET: 'reset',
    SET_MAX_BARS: 'set-max-bars',
    SET_DELAY: 'set-delay',
    SET_DIMENSIONS: 'set-dimensions',
    SET_SLIDERI: 'set-sliderI',
    SET_NUMBARS: 'set-numbars'
}

const Visualizer = props => {

    // ********************************************** //
    // *** useREF, useSTATE, AND useREDUCER HOOKS *** //
    // ********************************************** //
    const ref = React.useRef()
    // barsReducer for the data of the bars.
    const [stateBars, dispatchBars] = useReducer(barsReducer, { barsArray: [], animations: [], run: false })
    // stateReducer for the state data.
    const [state, dispatchState] = useReducer(stateReducer, { maxBars: 0, dimensions: {width: 0, height: 0},
        sliderI: 0, numBars: 0})
    // states used for animation updates
    const [animation, setAnimation] = useState({tempArray: [], currentCompare: [], tempAnimations: []})
    const [delay, setDelay] = useState(5)
    const [sorted, setSorted] = useState(false)

    // *********************** //
    // *** USEEFFECT HOOKS *** //
    // *********************** //
    
    // Handle BEFORE MOUNT effects, useRef for dimensions and calculating maxbars.
    useLayoutEffect(() => {
        function handleResize() {
            if(ref.current){
                dispatchState({ type: ACTIONS.SET_MAX_BARS, payload: { width: window.innerWidth - 270 }})
                dispatchState({ type: ACTIONS.SET_DIMENSIONS, payload: { width: window.innerWidth - 270,
                    height: ref.current.offsetHeight} })
            }
        }
        handleResize()
        dispatchState({ type: ACTIONS.SET_NUMBARS, payload: { num: 50 } })
        dispatchState({ type: ACTIONS.SET_SLIDERI, payload: { num: 50 } })
        window.addEventListener('resize', handleResize)
        return () => {
            window.removeEventListener('resize', handleResize)
        };
    }, [])

    // Side effects of numBars: get new bars of size numBars.
    useEffect(() => {
        setSorted(false)
        dispatchBars({ type: ACTIONS.GET_NEW_BARS, payload: { num: state.numBars} })
    }, [state.numBars])

    // When run is changed to true, gets the animations and sets them.
    // This triggers the useEffect that runs the animations.
    useEffect(() => {
        if(stateBars.run){
            let tArray = stateBars.barsArray.slice()
            let cCompare = []
            let tAnimations = stateBars.animations.slice()

            setSorted(true)
            setAnimation({tempArray: tArray, currentCompare: cCompare, tempAnimations: tAnimations})
        }

        return () => {
            return
        }
    }, [stateBars.run])

    // This one handles the animation running.
    useEffect(() => {
        let tAnimations = animation.tempAnimations
        let cCompare = animation.currentCompare
        let aBars = document.getElementsByClassName('array-bar')
        let tArray = animation.tempArray

        if(stateBars.run && tAnimations.length > 0){
            let animation = tAnimations.pop()
            setTimeout(() => {
                switch(animation[1]) {
                    case "compare":
                        if(cCompare){
                            cCompare.forEach(index => {
                                aBars[index].style.backgroundColor = '#b7f0f9'
                            })
                        }
                        animation[0].forEach(index => {
                            aBars[index].style.backgroundColor = '#ffb092'
                        })
                        cCompare = animation[0]
                        break

                    case "write":
                        tArray[animation[0][0]] = animation[0][1]
                        dispatchBars({ type: ACTIONS.SET_BARS, payload: {bars: tArray}}) 
                        break

                    case "swap":
                        let temp = tArray[animation[0][1]]
                        tArray[animation[0][1]] = tArray[animation[0][0]]
                        tArray[animation[0][0]] = temp
                        dispatchBars({ type: ACTIONS.SET_BARS, payload: {bars: tArray}})
                        break 

                    default:
                        break
                }
                aBars = document.getElementsByClassName('array-bar')
                setTimeout(() => {
                    console.log("in the algorithm")
                    setAnimation({ tempArray: tArray, currentCompare: cCompare, tempAnimations: tAnimations, delay: delay })
                }, delay)
            }, delay)
        }
        else{
            setTimeout(() => {
                cCompare.forEach(index => {
                    aBars[index].style.backgroundColor = '#b7f0f9'
                })
                dispatchBars({ type: ACTIONS.RUN_FALSE })
            }, delay)
        }


        return () => {
            
        }
    }, [animation])

    // ************************* //
    // *** REDUCER HANDELING *** //
    // ************************* //

    // Logic handling for the bars
    function barsReducer(stateBars, action) {
        
        switch (action.type) {
            case ACTIONS.GET_NEW_BARS:
                let array = []
                for (let i = 0; i < action.payload.num; i++) {
                    array.push(Math.floor(Math.random() * (max - min + 1) + min))
                }
                let a = getAnimations(array)
                return {...stateBars, barsArray: array, animations: a, run: false }

            case ACTIONS.RUN_TRUE:
                return {...stateBars, run: true}
                
            case ACTIONS.RUN_FALSE:
                return {...stateBars, run: false}

            case ACTIONS.SET_BARS:
                return {...stateBars, barsArray: action.payload.bars}
            default:
                return stateBars
        }
    }

    // Logic handling for all states.
    function stateReducer(state, action) {
        switch (action.type) {
            case ACTIONS.RESET: 
                
                break

            case ACTIONS.SET_MAX_BARS:
                let maxB = Math.floor(action.payload.width/4)
                if( maxB < state.numBars || state.maxBars === 0) {
                    return {...state, maxBars: maxB, numBars: maxB}
                }
                return {...state, maxBars: maxB}

            case ACTIONS.SET_DIMENSIONS:
                return {...state, dimensions: {width: action.payload.width,
                     height: action.payload.height}}

            case ACTIONS.SET_SLIDERI:
                return {...state, sliderI: action.payload.num}

            case ACTIONS.SET_NUMBARS:
                return {...state, numBars: action.payload.num}

            default:
                return state
        }
    }

    //Todo: when array

    // ********************** //
    // *** EVENT HANDLERS *** //
    // ********************** //
    
    const handleRunAlgorithmClick = async () => {
        if(!sorted){
            dispatchBars({ type: ACTIONS.RUN_TRUE})
        }
    }

    const handleGenerateNewDataClick = async () => {
        setSorted(false)
        dispatchBars({ type: ACTIONS.GET_NEW_BARS, payload: { num: state.numBars } })
    }

    // ************************ //
    // *** HELPER FUNCTIONS *** //
    // ************************ //
    function getAnimations(array) {
        switch(props.algorithm) {
            case "merge-sort":
                return getMergeSortAnimations(array.slice())

            case "bubble-sort":
                return getBubbleSortAnimations(array.slice())

            case "quick-sort":
                return getQuickSortAnimations(array.slice())

            case "insertion-sort":
                return getInsertionSortAnimations(array.slice())

            default:
                return []
        }
    }

    // ****************************** //
    // *** DOM ELEMENTS TO RETURN *** //
    // ****************************** //
    return (
        <div >
            <hr color='#7d5748' />
            {/* Bar Visualization is generated here using styling. */}
            {/* container for the bars. */}
            <Box ref={ref}
                sx={{ 
                    height: `${window.innerHeight/2}px`,
                    justifyItems: 'center'
                }}
                >
                {/* map barsArray to a function that generates a bar for each value. */}
                {stateBars.barsArray.map( (value, idx) => (
                    <Box className='array-bar' key={idx}
                        sx={{ 
                            display: 'inline-block',
                            backgroundColor: '#b7f0f9',
                            minWidth: '2px',
                            width: `${((state.maxBars*4)-(state.numBars*2))/state.numBars}px`,
                            margin: '0 1px',
                            height: `${state.dimensions.height*(value/max)}px`}}
                        >
                    </Box>
                ))}
                {console.log('The width is', state.dimensions.width)}
            </Box>

            {/* Inputs to change the properties of the visualization. */}
            <Box>
                <Toolbar>
                    {/* Button to run the algorithm. */}
                    <Button 
                        onClick={handleRunAlgorithmClick} 
                        sx={{m: '0px', size: {xs: 'small'}, color: '#b7f0f9'}}
                        >
                        Run Algorithm
                    </Button>

                    {/* Button to generate new barsArray. */}
                    <Button 
                        onClick={handleGenerateNewDataClick}
                        sx={{ size: {xs: 'small', color: '#b7f0f9'}}} 
                        >
                        Generate New Data
                    </Button>
                    
                    {/* Fills in the white space. */}
                    <Box sx={{flexGrow: 1}} />

                    {/* Slider to change the size of the barsArray. */}
                    <FormLabel sx={{ m: '0px 10px 0px 15px', color:'#8FB0B5' }}> Change Array Size: </FormLabel>
                    <Slider 
                        onChange={(e) => dispatchState({ type: ACTIONS.SET_SLIDERI, payload: {num: e.target.value} })} // Update sliderI.
                        onChangeCommitted={() => dispatchState({ type: ACTIONS.SET_NUMBARS, payload: {num: state.sliderI} })} // Update numBars
                        min={10} 
                        max={state.maxBars}
                        step={1}
                        size='small' 
                        sx={{ width: 100, color: '#b7f0f9' }}  
                        value={state.sliderI}
                        valueLabelDisplay="auto"
                        > </Slider>

                    {/* Slider to change the speed of the algorithm. */}
                    <FormLabel sx={{ m: '0px 10px 0px 15px', color: '#8FB0B5' }}> Change Delay: </FormLabel>
                    <Slider 
                        onChange={(e) => setDelay(e.target.value)} 
                        min={1}
                        max={100}
                        size='small' 
                        sx={{width: 100, color: '#b7f0f9'}}
                        value={delay}
                        valueLabelDisplay="auto"
                        > </Slider> 
                    </Toolbar>
            </Box>
            <hr color='#7d5748'/>

        </div>
    )


}

export default Visualizer