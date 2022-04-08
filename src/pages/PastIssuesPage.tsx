import React from 'react'
import '../css/pastissuepage.css';

//TODO: migrate past issues js
function PastIssuesPage(props:{isMobile:boolean}) {
  return (  
	<div id="issues" className="issues">
		<div id="issuetext">ISSUE</div>
		<div id="issuenumber">
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
		<div id="issuethemedown" className="issuetheme"></div>
		<div id="cover" className="centerphoto">
			<img id="coverimg" alt='magazine cover'/>
		</div>
		<div id="issuesback" className="back">BACK</div>
    </div>
  )
}

export default PastIssuesPage;