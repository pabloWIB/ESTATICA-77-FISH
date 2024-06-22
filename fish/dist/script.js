function setAnimDelay(selector, dur, add) {
	var i = 0;
	$(selector).each(function(){
		i++;
		var eLduration = (dur * i) + add;
		$(this).css({
			"animation-delay": eLduration+"s",
			"-webkit-animation-delay": eLduration+"s" 
		})
	});
}

$(document).ready(function(){
  setAnimDelay('.toppiks', 0.1, 0);
});

$(document).ready(function(){
  setAnimDelay('.bpiks', 0.2, 0.3);
});

$(document).ready(function(){
  setAnimDelay('.mpiks', 0.1, 0);
});