//DEVICE CHECK
let check = false;
window.mobileAndTabletCheck = function () {
	(function (a) {
		if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true;
	})(navigator.userAgent || navigator.vendor || window.opera);
	console.log(check ? "Mobile device detected" : "Desktop or other device detected")
};
window.mobileAndTabletCheck()

//TODO: prep for release page
//ABOUT PAGE HOVER IMGS
var hoverword
var hoverphotos = {
	"reframe": "https://www.dropbox.com/s/6xwnwzpya7sewfr/a.png?raw=1",
	"culture": "https://www.dropbox.com/s/7lhk7lznsve0c35/b.png?raw=1",
	"lens": "https://www.dropbox.com/s/vx6aw12no52yxkk/c.png?raw=1",
	"launched": "https://www.dropbox.com/s/2vr6qhqibjtnzty/d.png?raw=1",
	"new": "https://www.dropbox.com/s/29wdns5xhemo75p/e.png?raw=1",
	"semester": "https://www.dropbox.com/s/0ewxrv36d8g349z/f.png?raw=1",
	"features": "https://www.dropbox.com/s/sf3bj6jqb4fhvul/g.png?raw=1",
	"unified": "https://www.dropbox.com/s/8ktt74c7xogf4vo/h.png?raw=1",
	"space": "https://www.dropbox.com/s/8o1ommtvknr9c5k/i.png?raw=1",
	"platform": "https://www.dropbox.com/s/qqzdteig421h2qv/j.png?raw=1",
	"beyond": "https://www.dropbox.com/s/gxx8z5fccp0dfkz/k.png?raw=1"
}

var aboutimagespreload = ""
for (i = 0; i < Object.keys(hoverphotos).length; i++) {
	var imgurl = hoverphotos[Object.keys(hoverphotos)[i]]
	aboutimagespreload = aboutimagespreload + "'" + imgurl + "'" + ","
}
aboutimagespreload = aboutimagespreload.slice(0, -1)

//NEWS PAGE
if(moment().isBefore('2021-12-09T21')){
	$('.upcoming-issue-box').css({display:'block'});
	$('.release-box').css({display:'none'});
	$(document).ready(function(){
		var time_till = moment('2021-12-09T21').fromNow();
		var coundown_text = $('.countdown').text();
		$('.countdown').text(coundown_text.replace(/Countdown/g,time_till));
	});
}
else{
	$('.upcoming-issue-box').css({display:'none'});
	$('.release-box').css({display:'block'});
	var confetti = new Confetti('confetti');

	// Edit given parameters
	confetti.setCount(75);
	confetti.setSize(1);
	confetti.setPower(25);
	confetti.setFade(true);
	confetti.destroyTarget(false); 

	var confetti2 = new Confetti('clear');
	// Edit given parameters
	confetti2.setCount(75);
	confetti2.setSize(1);
	confetti2.setPower(25);
	confetti2.setFade(true);
	confetti2.destroyTarget(false); 
}

//ISSUES PAGE SCROLL INTERACTION
var maptheme = {
	"issuenine": "CHAOS",
	"issueeight": "LIGHT",
	"issueseven": "STYLE",
	"issuesix": "CONTAGIOUS",
	"issuefive": "FIVE",
	"issuefour": "FOUR",
	"issuethree": "THREE",
	"issuetwo": "TWO",
	"issueone": "ONE"
}

//FIXME: these are not all the same size, causes text to stick out behind the cover of some issues
var coverurl = {
	"issuenine": "img/issue_9_cover.jpg",
	"issueeight": "img/issue8cover.jpg",
	"issueseven": "https://www.dropbox.com/s/a19lrgt6dcy9c1g/Issuesevencover.jpg?raw=1",
	"issuesix": "https://www.dropbox.com/s/7cgdjbd8754w11v/issuesixcover.jpg?raw=1",
	"issuefive": "https://www.dropbox.com/s/vxem2tx3sq1riel/issuefivecover.jpg?raw=1",
	"issuefour": "https://www.dropbox.com/s/dgbxkqv4l57gmci/issuefourcover.jpg?raw=1",
	"issuethree": "https://www.dropbox.com/s/4bvfcfialamof54/issuethreecover.jpg?raw=1",
	"issuetwo": "https://www.dropbox.com/s/v3ccczh2uoanlm2/issuetwocover.jpg?raw=1",
	"issueone": "https://www.dropbox.com/s/8a8wrdm0tttg3rv/issueonecover.jpg?raw=1"
}

var coverimagespreload = ""
for (i = 0; i < Object.keys(coverurl).length; i++) {
	var coverimage = coverurl[Object.keys(coverurl)[i]]
	coverimagespreload = coverimagespreload + "'" + coverimage + "'" + ","
}
coverimagespreload = coverimagespreload.slice(0, -1)

var controller = new ScrollMagic.Controller();

var triggeredissue
$('.issuenumber').each(function () {
	var scene = new ScrollMagic.Scene({
			triggerElement: this,
			//triggerHook: 0.8
		})
		.on("enter", function (event) {
			triggeredissue = $(event.target.triggerElement()).attr('id')
			d3.select("#coverimg").attr("src", coverurl[triggeredissue]).style("display", "block")
			d3.select("#issuethemedown").text(maptheme[triggeredissue])
			// if (maptheme[triggeredissue].length > 5) {
			// 	textFit($('#issuethemedown'), {
			// 		widthOnly: true
			// 	})
			// }
			d3.select("#issues").style("background-color", "black")
			d3.select("body").style("background-color", "black")
			d3.selectAll(".issuenumber, .issuetheme, #issuetext, #issuesback").style("color", "white")
			d3.select("#issuethemedown")
				.style("opacity", 1)
				.transition()
				.duration(550)
				.style("top", "40vh")
				.style("margin-top", "40vh")
		})
		.on("leave", function (event) {
			d3.select("#issues").style("background-color", "white")
			d3.select("body").style("background-color", "white")
			d3.selectAll(".issuenumber, .issuetheme, #issuetext, #issuesback").style("color", "black")
			d3.select("#coverimg").attr('src', null).style("display", "none")
			d3.select("#issuethemedown")
				.transition()
				.duration(550)
				.style("top", "100vh")
				.style("margin-top", "100vh")
		}).addTo(controller);
})


$('.space').each(function () {
	var scene = new ScrollMagic.Scene({
			triggerElement: this,
			//triggerHook: 0.8
		})
		.on("enter", function (event) {
			d3.select("#issuethemedown")
				.transition()
				.duration(550)
				.style("top", "100vh")
				.style("margin-top", "100vh")
				.on("end", () => {
					d3.select("#issuethemedown").style("opacity", 0)
				})
			d3.select("#issues").style("background-color", "white")
			d3.select("body").style("background-color", "white")
			d3.selectAll(".issuenumber, .issuetheme, #issuetext, #issuesback").style("color", "black")
			d3.select("#coverimg").attr('src', null).style("display", "none")
		})
		.on("leave", function (event) {
			triggeredissue = $(event.target.triggerElement()).attr('id')
			d3.select("#coverimg").attr("src", coverurl[triggeredissue]).style("display", "block")
			d3.select("#issuethemedown").text(maptheme[triggeredissue])
			if (maptheme[triggeredissue].length > 5) {
				textFit($('#issuethemedown'), {
					widthOnly: true
				})
			}
			d3.select("#issues").style("background-color", "black")
			d3.select("body").style("background-color", "black")
			d3.selectAll(".issuenumber, .issuetheme, #issuetext, #issuesback").style("color", "white")
			d3.select("#issuethemedown")
				.style("opacity", 1)
				.transition()
				.duration(550)
				.style("top", "40vh")
				.style("margin-top", "40vh")
		}).addTo(controller);
});


//ISSUE LINKS
var issuelinks = {
	"issueeight": "https://issuu.com/mit_infinite/docs/issue_8_master_file_final_fixed-compressed",
	"issueseven": "https://issuu.com/mit_infinite/docs/tableofcontents_f906b4f602b4f9",
	"issuesix": "https://issuu.com/mit_infinite/docs/infinite_part_1",
	"issuefive": "https://issuu.com/mit_infinite/docs/issue_v",
	"issuefour": "https://issuu.com/mit_infinite/docs/issue_4_full_final41819",
	"issuethree": "https://issuu.com/mit_infinite/docs/final_issue_3web",
	"issuetwo": "https://issuu.com/mit_infinite/docs/infinite_issue_2",
	"issueone": "https://issuu.com/mit_infinite/docs/infinite_issue_1"
}

//DESKTOP INTERACTION
if (check == false) {

	//ABOUT PAGE
	d3.selectAll("#reframe, #culture, #lens, #launched, #new, #semester, #features, #unified, #space, #platform, #beyond")
		.on('mouseover', function () {
			//TODO: highlight hovered image to make effect more clear
			hoverword = d3.select(this).attr("id")
			d3.select("#hoverimg").attr("src", hoverphotos[hoverword])
		})

	d3.select("body").on('click', function () {
		d3.select("#hoverimg").attr('src', null)
	})

	//ISSUES PAGE
	d3.selectAll("#issuenumber > div > span")
		.on('mouseover', function () {
			d3.select("#cover").style("display", "block")
		})
		.on('mouseout', function () {
			d3.select("#cover").style("display", "none")
		})

	d3.selectAll("#coverimg, .issuenumber").on("click", function () {
		window.open(issuelinks[triggeredissue], '_blank')
	})
}
//MOBILE INTERACTION
else{
	var clickstatus = ""
	var coverclickstatus = ""

	//ISSUES PAGE
	d3.selectAll("#cover, #coverimg").style("pointer-events", "auto")
	d3.select("#coverimg").style("width", "43vw").style("height", "auto") //.style("margin-top", "-5vh")

	d3.select("body").on('click', function () {
		//ABOUT PAGE
		if (clickstatus == "body") {
			d3.select("#hoverimg").attr('src', null).style("display", "none")
		}
		clickstatus = "body"

		//ISSUES PAGE
		if (coverclickstatus == "body") {
			d3.select("#cover").style("display", "none")
		}
		coverclickstatus = "body"
		console.log(coverclickstatus)
	})

	d3.selectAll("#issuenumber > div > span")
		.on('click', function () {
			hoverword = d3.select(this).attr("id")
			d3.select("#cover").style("display", "block")
			coverclickstatus = "cover"
		})

	d3.selectAll("#coverimg").on("click", function () {
		window.open(issuelinks[triggeredissue], '_blank')
	})

	//ABOUT PAGE
	d3.selectAll("#reframe, #culture, #lens, #launched, #new, #semester, #features, #unified, #space, #platform, #beyond")
		.on('click', function () {
			hoverword = d3.select(this).attr("id")
			d3.select("#hoverimg").attr("src", hoverphotos[hoverword]).style("display", "block")
			clickstatus = "img"
			console.log(clickstatus)
		})

}


//PAGE LINKS //TODO: make this id-selector based, selecting by class like this is unclear and sketchy
d3.select(".row4").on("click", function () {
	console.log("click detected");
	window.location = "#about"
	preload([aboutimagespreload], aboutpage())
})

d3.select(".row3").on("click", function () {
	console.log("click detected");
	window.location = "#issues"
	preload([coverimagespreload], issuespage())
})

d3.selectAll(".back").on("click", function () {
	console.log("click detected");
	window.location = ""
	pageback()
})


//FADE TRANSITIONS
function aboutpage() {
	d3.selectAll("#issues").style("display", "none")
	d3.select(".loading").style("display", "none")
	d3.select("body").style("background-color", "white")
	d3.selectAll("#news")
		.transition()
		.duration(700)
		.style("opacity", 0)
		.on("end", () => {
			d3.selectAll("#news").style("display", "none")
		})
	setTimeout(function () {
		d3.selectAll("#about")
			.transition()
			.delay(800)
			.style('opacity', 1).style("display", "block")
		d3.select('body').style("background-color", "white")
		document.body.scrollTop = 0;
		document.documentElement.scrollTop = 0;
	}, 600)
}


function issuespage() {
	d3.selectAll("#about").style("display", "none")
	d3.select("body").style("background-color", "black")
	d3.select(".loading").style("display", "none")
	d3.selectAll("#news")
		.transition()
		.duration(700)
		.style("opacity", 0)
		.on("end", () => {
			d3.selectAll("#news").style("display", "none")
		})
	setTimeout(
		function () {
			d3.selectAll("#issues").style("opacity", 1).style("display", "flex")
			window.scrollTo(0, document.body.scrollHeight)
			$('html,body').stop(true).animate({
				scrollTop: 0
			}, 1000, function () {});
		}, 1300)
}

function pageback() {
	d3.selectAll("#about")
		.transition()
		.duration(700)
		.style("opacity", 0)
		.on("end", () => {
			d3.selectAll("#about").style("display", "none")
		})
	d3.selectAll("#issues")
		.transition()
		.duration(700)
		.style("opacity", 0)
		.on("end", () => {
			d3.selectAll("#issues").style("display", "none")
		})
	setTimeout(
		function () {
			d3.selectAll("#news")
				.style("opacity", 1).style("display", "block")
			d3.select('body').style("background-color", "black")
			document.body.scrollTop = 0;
			document.documentElement.scrollTop = 0;
		}, 1300)
}


//PRELOAD FUNCTION
function preload(arrayOfImages, callback) {
	$(arrayOfImages).each(function () {
		$('<img />').attr('src', this).appendTo('body').css('opacity', 0);
	});
	if (callback) callback()
}

//CHECK URL //FIXME: this doesn't do anything
function checkurl() {
	if (location.hash.slice(1) === "about") {
		preload([aboutimagespreload], aboutpage())
	} else if (location.hash.slice(1) === "issues") {
		preload([coverimagespreload], issuespage())
	}
}
checkurl()


//LOADING SPINNER
$(window).on('load', function () {
	window.setTimeout(loadpage, 1000)
})
function loadpage() {
	$(".loading").fadeOut("slow")
	if (location.hash.slice(1) == "") {
		d3.selectAll("#news").transition().delay(300).duration(300).style("display", "block")
	}
}

console.log("web dev by Karyn, Diego, and Theo")