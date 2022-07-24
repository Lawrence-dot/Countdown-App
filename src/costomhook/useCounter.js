import {useState} from "react";

const useCount = (initialcount = 0) => {
    const [count, setCount]= useState(initialcount);
    
    const increase = () => {
        setCount(count + 1);
    }
    const decrease = () => {
        setCount(count - 1);
    }
    const reset = () => {
        setCount(initialcount);
    }

    return[count, increase, decrease, reset]
}

export default useCount;