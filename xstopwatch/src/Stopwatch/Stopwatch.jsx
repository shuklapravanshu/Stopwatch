import { useState, useEffect } from "react";

const Home = () => {

    const [ minutes, setMinutes ] = useState(0);
    const [ seconds, setSeconds ] = useState(0);
    const [ isRunning, setIsRunning ] = useState(false);

    useEffect(() => {
        
        let timer;

        if(isRunning){
            timer = setInterval(() => {
                setSeconds((prevSeconds) => {
                    if (prevSeconds === 59) {
                        setMinutes((prevMinutes) => prevMinutes + 1);
                        return 0;
                    }
                    return prevSeconds + 1;
                });
            }, 1000);
        }

        return () => clearInterval(timer);

    }, [isRunning])

    const reset = () => {

        setIsRunning(false);
        setSeconds(0);
        setMinutes(0);
        
    }


    return (
        <div>
            <h1>Stopwatch</h1>
            <p>Time: {minutes}:{seconds < 10 ? "0"+seconds : seconds}</p>
            {isRunning ? (
                <>
                <button onClick={() => setIsRunning(false)}>Stop</button>
                <button onClick={reset}>Reset</button>
                </>
                
            ) : (
                <>
                <button onClick={() => setIsRunning(true)}>Start</button>
                <button onClick={reset}>Reset</button>
                </>
            )
                
            }
            
        </div>
    )
}

export default Home;