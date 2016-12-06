/************* CONFIG SECTION ***************/

var DEFAULT_SAMPLE_DURATION = 2000;

var soundObj; //sound object
var tempo=150;
var position, duration = 2*(60000 / tempo);
var trackDuration;
var interval;
var filename='guitar.mp3';
var samples = [];
var selected = 1;


/*********** PROGRAM SECTION ***************/

soundManager.onready(function() {
	start();
});

function loadSamples() {
    var i;
    for (i = 0; i < 8; i++) {
        samples[i] = {
            id: i,
            position: randomSongPostition(1, track_duration),
            duration: DEFAULT_SAMPLE_DURATION
        };
        $(".buttonSpace[data-sample-id='" + i + "']").find(".samplePosition").val(samples[i].position);
    }
}
function start(){
	soundObj = soundManager.createSound({
	  id: 'mySound',
	  url: 'music/'+filename,
	  autoLoad: true,
	  autoPlay: false,
	  onload: function() {
        track_duration = this.durationEstimate;
        $(".samplePositionSlider")[0].max = track_duration;
        loadSamples();
	  },
	  volume: 100,
	  multiShot: true
});

}

function randomAll(){
	$("div[data-sample-id]").each(function(key, value){
		losuj_jeden_sampel($(value).attr('data-sample-id'));
	});
}

function playSampel(pos, duration){
	if(soundObj.playState === 1){ //if play
		soundObj.stop();
		clearInterval(interval);
	}
	soundObj.setPosition(pos);
	soundObj.play();
	interval = setTimeout(function(){ soundObj.stop(); }, duration);
}

function load_music(){
	filename = document.getElementById("musicSelect").value;
	soundObj.destruct();
	soundObj = soundManager.createSound({
	  id: 'mySound',
	  url: 'music/'+filename,
	  autoLoad: true,
	  autoPlay: false,
		onload: function() {
			track_duration = this.durationEstimate;
			loadSamples();
	  },
	  volume: 100
	});
}

function losuj_jeden_sampel(ktory){
	var random = randomSongPostition(1, track_duration);
	$(".buttonSpace[data-sample-id='" + ktory + "']").find(".samplePosition").val(random);
}

function save(ktory){
var start = 0;
var stop = 0;
var sound = filename;
var name = filename.substr(0, 3);
	for(i=0; i<8; i++){
		if(typeof ktory !== "undefined" && i != ktory) continue;
		 start = $(".buttonSpace[data-sample-id='" + i +"']").find(".samplePosition").val();
		 stop = $(".buttonSpace[data-sample-id='" + i +"']").find(".sampleLength").val();

		 start /= 1000;
		 stop /= 1000;
		 var xmlhttp;
		 // compatible with IE7+, Firefox, Chrome, Opera, Safari
		 xmlhttp = new XMLHttpRequest();
		 xmlhttp.onreadystatechange = function(){
				 if (xmlhttp.readyState == 4 && xmlhttp.status == 200){
						 callback(xmlhttp.responseText);
				 }
		 }
		 xmlhttp.open("GET", "http://localhost/magicsampler/slice.php?start="+start+"&stop="+stop+"&sound="+sound+"&name="+name+(i+1)+"_"+start, true);
		 xmlhttp.send();
	}
	//join();
}

function randomSongPostition(od, przedzial){
		return Math.floor((Math.random() * przedzial) + od);
}

function postionChange(howMuch){
	samples[selected].position += parseInt(howMuch);
	$(".position").val(samples[selected].position);
}