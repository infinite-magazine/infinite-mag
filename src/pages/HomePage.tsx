import React,{useEffect} from 'react';
import {TickerTape,Countdown,MagazinePedestal} from '../components'
import cover from '../images/issue_9_cover.jpg';
import '../css/homepage.css';

const releaseDate = new Date(2022,5,11);
const HomePage = (props:{isMobile:boolean}) =>{
    return (
        <div className = 'homepage'>
        <TickerTape title = 'INFINITE' fontSize={props.isMobile?'26.5vw':'26.5vh'} bgColor='white' textColor='black'/>
        <Countdown release_date={releaseDate}>
            <MagazinePedestal image = {cover} alt_text='INFINITE MAGAZINE ISSUE X: DIMENSIONS'/>
        </Countdown>
        <hr/>
        <TickerTape title = 'ABOUT' link='/about' fontSize={props.isMobile?'14.5vw':'14.5vh'} direction='reverse'/>
        <hr/>
        <TickerTape title = 'PAST ISSUES' link='/past-issues' fontSize={props.isMobile?'14.5vw':'14.5vh'} />
        <hr/>
        <TickerTape title = 'INSTAGRAM' link='https://www.instagram.com/infinite_magazine' fontSize={props.isMobile?'14.5vw':'14.5vh'} direction='reverse'/>
        </div>
    );
}

export default HomePage;