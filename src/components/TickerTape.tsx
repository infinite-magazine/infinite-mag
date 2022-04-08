import { useNavigate } from 'react-router-dom';
import '../css/ticker.css';

interface TickerProps{
    title:string,
    fontSize:string,
    direction?: 'normal' | 'reverse',
    link?: string,
    textColor?: string,
    bgColor?: string
}

//TODO: looping could be better
const TickerTape = (props:TickerProps) => {
    const nav = useNavigate();
    const custom_style = {
        fontSize: props.fontSize,
        animationDirection: props.direction,

        '&:hover':{ //FIXME: ticker hover
            background: 'white'
        }
    };
    return(
        <div className="ticker" 
        style = {{background:props.bgColor, color:props.textColor}}
        onClick = {() => {
            if(!props.link) return;
            if(props.link.includes('http')){ 
                window.location.href = props.link;
            } else{
                nav(props.link);
            }
        }}>
				<div style = {custom_style}>
					{(props.title +" ").repeat(6)} 
				</div>
                <div style = {custom_style}>
					{(props.title +" ").repeat(6)} 
				</div>
		</div>
    );
}
export default TickerTape;

