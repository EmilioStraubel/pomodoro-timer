import React from "react";
import {minutesToDuration} from "../utils/duration";        //importing minutesToDuration from the duration directory

function BreakDuration({breakDuration, increaseBreakDuration, isTimerRunning, decreaseBreakDuration}) {
    //Passing through 
    return (
        <div className="input-group input-group-lg mb-2">
            <span className="input-group-text" data-testid="duration-break">
                {/* TODO: Update this text to display the current break session duration */}
                Break Duration: {minutesToDuration("0" + breakDuration)}
            </span>
            <div className="input-group-append">
                {/* TODO: Implement decreasing break duration and disable during a focus or break session*/}
            <button
                type="button"
                className="btn btn-secondary"
                data-testid="decrease-break"
                onClick={decreaseBreakDuration}                         //onClick listener, it will implement decreaseBreakDuration
                disabled={isTimerRunning}                              //will disable the timer from running by setting it equal to false
            >
                <span className="oi oi-minus" />
            </button>
                {/* TODO: Implement increasing break duration and disable during a focus or break session*/}
            <button
                type="button"
                className="btn btn-secondary"
                data-testid="increase-break"
                onClick={increaseBreakDuration}                     //onClick listener, it will implement increaseBreakDuration
                disabled={isTimerRunning}                           //will disable the timer from running by setting it equal to false
            >
                <span className="oi oi-plus" />
            </button>
            </div>
        </div>
    )
}              
    export default BreakDuration;