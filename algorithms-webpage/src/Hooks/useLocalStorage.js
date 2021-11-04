// This is a custom hook that enables local storage use with the same format 
// as the built in useState hook.
// Format: const [value, setValue] = useLocalStorage(key, initValue)
// Got code from video https://www.youtube.com/watch?v=6ThXsUwLWvc

import { useState } from "react";

function getSavedValue(key, initValue) {
    const savedValue = JSON.parse(localStorage.getItem(key))

    if (savedValue) return savedValue

    if (initValue instanceof Function) return initValue()
    return initValue
}

export default function useLocalStorage(key, initValue) {
    const [value, setValue] = useState(() => {
        return getSavedValue(key, initValue)
    })

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value))
    }, [value])

    return [value, setValue]
}