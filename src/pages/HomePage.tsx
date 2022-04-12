import React,{useEffect} from 'react';
import {TickerTape, Countdown, MagazinePedestal} from '../components';
import '../css/homepage.css';

const releaseDate = new Date(2022,5,11);
const HomePage = (props:{isMobile:boolean}) =>{
    return (
        <div className = 'homepage'>
        {/*TODO: stop using isMobile in react and use ids passed to css media queries */}
        <TickerTape title = 'INFINITE' id='title' fontSize={props.isMobile?'26.5vw':'26.5vh'} bgColor='white' textColor='black'/>
        <Countdown release_date={releaseDate}>
            {/* <MagazinePedestal  alt_text='INFINITE MAGAZINE ISSUE X: DIMENSIONS'/> */}
        </Countdown>
        <div className = 'links'>
            <hr/>
            <TickerTape title = 'ABOUT' link='/about' fontSize={props.isMobile?'14.5vw':'14.5vh'} direction='reverse'/>
            <hr/>
            <TickerTape title = 'PAST ISSUES' link='/past-issues' fontSize={props.isMobile?'14.5vw':'14.5vh'} />
            <hr/>
            <TickerTape title = 'INSTAGRAM' link='https://www.instagram.com/infinite_magazine' fontSize={props.isMobile?'14.5vw':'14.5vh'} direction='reverse'/>
        </div>
        </div>
    );
}

export default HomePage;