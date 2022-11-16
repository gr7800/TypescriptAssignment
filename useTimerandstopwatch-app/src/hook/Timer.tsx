import React from 'react'
import useTimer from './useTimer';

const Timer = () => {
    const { timer, isActive, isPaused, handleStart, handlePause, handleResume, handleReset } = useTimer(0);

    return (
        <div className='app'>
            <h3>React Stopwatch</h3>
            <div className='stopwatch-card'>
                <p>{(timer)}</p>
                <div className='buttons'>
                    {
                        !isActive && !isPaused ?
                            <button onClick={handleStart}>Start</button>
                            : (
                                isPaused ? <button onClick={handlePause}>Pause</button> :
                                    <button onClick={handleResume}>Reusume</button>
                            )
                    }
                    <button onClick={handleReset} disabled={!isActive}>Reset</button>
                </div>
            </div>
        </div>
    );
}

export default Timer