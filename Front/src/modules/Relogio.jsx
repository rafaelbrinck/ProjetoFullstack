import { useState, useEffect } from "react";

export default function Relogio(){
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date())
        }, 1000);

        return () => clearInterval(timer)
    },[]);

    const formatTime = (date) => {
        date.toLocaleTimeString([], {hour: "2-digit", minute: "2-digit"});
    }

    return(
        <span className="clock">
            {formatTime(time)}
        </span>
    )
}



  