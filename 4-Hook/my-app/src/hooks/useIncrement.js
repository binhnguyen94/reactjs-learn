import { useState } from "react";


export default function useIncrement() {
    const [count, setCount] = useState(0);

    function increase(addMount) {
        setCount(addMount+count)
    }

    return [count, increase]
}