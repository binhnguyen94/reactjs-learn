import { useEffect, useState } from "react"

export default function Timer() {
    const [timer, setTimer] = useState(10);

    useEffect(() => {
        const checkTimer = setInterval(() => {
            if (timer > 0) return setTimer(timer - 1);
        }, 1000)
        if (timer === 0) return alert("time up")
        return () => clearInterval(checkTimer)
    }, [timer])

    return (
        <div className="timer">
            <h2>Count down from {timer}</h2>
        </div>
    )
}