$(function(){

let banner_left = 0;
let img_cnt = 0;
let first=1;
let last;
let interval;

$(document).ready(function() {
	$(".rolling_wrap1 a").each(function() {
		$(this).css("left", banner_left);
		banner_left += $(this).width()+30;
		$(this).attr("id", "content"+(++img_cnt));
	});

	last = img_cnt;
	startAction();

	$(".content").hover(
		function() { stopAction(); }, 
		function() { startAction(); });0
});

function startAction() {
	interval = setInterval(function() {
		$(".rolling_wrap1 a").each(function() {
			$(this).css("left", $(this).position().left-1);
		});

		let first_content = $("#content"+first);
		let last_content = $("#content"+last);

		if(first_content.position().left < "-"+$(first_content).width()) {
			first_content.css("left", last_content.position().left+last_content.width()+30);
			first++;
			last++;
			if(last > img_cnt) { last = 1;}
			if(first > img_cnt) {first = 1;}
		}
	}, 15);
}

function stopAction() {
	clearInterval(interval);
}
});