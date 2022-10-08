import { useState } from "react";
import useIncrement from "../hooks/useIncrement";

export default function Count() {
    const [count1, setCount1] = useIncrement(1);
    const [count2, setCount2] = useIncrement(1);

    return (
        <div>
            <div className="count-1">
                <h4>Count 1: {count1}</h4>
                <button onClick={() => setCount1(1)}>Add 1</button>
            </div>
            <div className="count-2">
                <h4>Count 2: {count2}</h4>
                <button onClick={() => setCount2(2)}>Add 2</button>
            </div>

        </div>
    )
}