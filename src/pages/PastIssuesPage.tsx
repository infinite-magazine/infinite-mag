import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import '../css/pastissuepage.css';

//FIXME: migrate past issues js logic
//TODO: add issue 9

const links = [
	"https://issuu.com/mit_infinite/docs/infinite_issue_1",
	"https://issuu.com/mit_infinite/docs/infinite_issue_2",
	"https://issuu.com/mit_infinite/docs/final_issue_3web",
	"https://issuu.com/mit_infinite/docs/issue_4_full_final41819",
	"https://issuu.com/mit_infinite/docs/issue_v",
	"https://issuu.com/mit_infinite/docs/infinite_part_1",
	"https://issuu.com/mit_infinite/docs/tableofcontents_f906b4f602b4f9",
	"https://issuu.com/mit_infinite/docs/issue_8_master_file_final_fixed-compressed",
	"https://issuu.com/mit_infinite/docs/issue9_masterfile_small"
];
const themes = ['ONE', 'TWO', 'THREE', 'FOUR', 'FIVE', 'CONTAGIOUS', 'STYLE', 'LIGHT', 'CHAOS'];
const img_links = [
	"https://www.dropbox.com/s/8a8wrdm0tttg3rv/issueonecover.jpg?raw=1",
	"https://www.dropbox.com/s/v3ccczh2uoanlm2/issuetwocover.jpg?raw=1",
	"https://www.dropbox.com/s/4bvfcfialamof54/issuethreecover.jpg?raw=1",
	"https://www.dropbox.com/s/dgbxkqv4l57gmci/issuefourcover.jpg?raw=1",
	"https://www.dropbox.com/s/vxem2tx3sq1riel/issuefivecover.jpg?raw=1",
	"https://www.dropbox.com/s/7cgdjbd8754w11v/issuesixcover.jpg?raw=1",
	"https://www.dropbox.com/s/a19lrgt6dcy9c1g/Issuesevencover.jpg?raw=1",
	"images/issue8cover.jpg",
	"images/issue_9_cover.jpg"
];

function PastIssuesPage(props: { isMobile: boolean }) {
	const [issuePos, setIssuePos] = useState(0);
	const scroll = useScroll();
	const [hoverRef, isHovered] = useHover();

	useEffect(() => {
		let issPos = Math.round(scroll / window.innerHeight)
		setIssuePos(issPos);
	}, [scroll]);

	return (
		<div id="issues" className="issues">
			<div id="issuetext" style={{color: (isHovered || props.isMobile)? 'white':'black'}}>ISSUE</div>
			{/*@ts-ignore */}
			<div id = 'issue' ref={hoverRef}>
			<div id="issuenumber" style={{color: (isHovered || props.isMobile)? 'white':'black'}}
			onClick = {()=> window.location.href = links[8-issuePos]}> 
				<div id="issueeight" className="issuenumber"><span>9</span></div>
				<div id="issueeight" className="space"></div>
				<div id="issueeight" className="issuenumber"><span>8</span></div>
				<div id="issueeight" className="space"></div>
				<div id="issueseven" className="issuenumber"><span>7</span></div>
				<div id="issueseven" className="space"></div>
				<div id="issuesix" className="issuenumber"><span>6</span></div>
				<div id="issuesix" className="space"></div>
				<div id="issuefive" className="issuenumber"><span>V</span></div>
				<div id="issuefive" className="space"></div>
				<div id="issuefour" className="issuenumber"><span>4</span></div>
				<div id="issuefour" className="space"></div>
				<div id="issuethree" className="issuenumber"><span>3</span></div>
				<div id="issuethree" className="space"></div>
				<div id="issuetwo" className="issuenumber"><span>2</span></div>
				<div id="issuetwo" className="space"></div>
				<div id="issueone" className="issuenumber"><span>1</span></div>
				<div id="issueone" className="space"></div>
			</div>
			<div id="cover" className="centerphoto" style={{opacity:(isHovered || props.isMobile)?'100%':'0%', }}>
				<img id="coverimg" alt='magazine cover' src={img_links[8 - issuePos]} />
			</div>
			</div>
			<div id="issuethemedown" className="issuetheme" style={{color: (isHovered||props.isMobile)? 'white':'black'}}>{themes[8 - issuePos]}</div>
			
			<Link to='/' id='issuesback'>BACK</Link>
		</div>
	)

}

const useScroll = () => {
	const [scroll, setScroll] = useState(0);

	useEffect(() => {
		window.addEventListener('scroll', scrollHandler);
		return () => {
			window.removeEventListener('scroll', scrollHandler);
		};
	}, []);
	const scrollHandler = () => {
		setScroll(window.scrollY);
	};
	return scroll;
};

// typescript hates this hook for some reason
// @ts-ignore
function useHover() {
	const [value, setValue] = useState(false);

	const ref = useRef(null);

	const handleMouseOver = () => setValue(true);
	const handleMouseOut = () => setValue(false);

	useEffect(
		() => {
			const node = ref?.current;
			if (node) {
				// @ts-ignore
				node.addEventListener("mouseover", handleMouseOver);
				// @ts-ignore
				node.addEventListener("mouseout", handleMouseOut);

				return () => {
					// @ts-ignore
					node.removeEventListener("mouseover", handleMouseOver);
					// @ts-ignore
					node.removeEventListener("mouseout", handleMouseOut);
				};
			}
		},
		[ref.current] // Recall only if ref changes
	);

	return [ref, value];
}

export default PastIssuesPage;