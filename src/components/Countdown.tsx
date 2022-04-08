import React, { useState, useEffect} from "react";
import '../css/countdown.css';

//TODO: tunnel effec
interface CountdownProps{
    release_date:Date,
    children: any // i dont remember how to get the internal children 
}
//Coundown display that reveals children after designated date
const Countdown =  (props:CountdownProps) => {
    const [time_left, setTimeLeft] = useState(1);
    const [lapsed, setLapsed] = useState(false);
    useEffect(()=>{
        const interval_id = setInterval(()=>
        {
            setLapsed(new Date() >= props.release_date);
            var dif = (props.release_date.getTime() - (new Date()).getTime())/1000;
            setTimeLeft(dif);
        }
            , 1000);
    });

    if(lapsed) return props.children;

    return (
        <div className = 'countdown' >
            <div>
            <div className ='dimension' id = 'dim-1'>X</div>
            <div className ='dimension' id = 'dim-2'>X</div>
            <div className ='dimension' id = 'dim-3'>X</div>
            <div className ='dimension' id = 'dim-4'>X</div>
            <div className ='dimension' id = 'dim-5'>X</div>

            <div className = 'issue-title' >
                ISSUE X <br/> DIMENSIONS
            </div>
            </div>
            <div className= 't-minus'>
                {/* TODO: pad 1 digit elements with a 0 */}
                {(Math.floor(time_left/(60*60*48))).toString() + ':' 
                + (Math.floor(time_left/(60*60))%24).toString() + ':' 
                + (Math.floor(time_left/60)%60).toString() + ':'
                + (Math.floor(time_left)%60).toString()}
            </div>
        </div>
    );
}

export default Countdown;