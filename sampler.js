/************* CONFIG SECTION ***************/

var DEFAULT_SAMPLE_DURATION = 2000;

var soundObj; //sound object
var tempo=150;
var position, duration = 2*(60000 / tempo);
var trackDuration;
var interval;
var filename;
var samples = [];
var selected = 1;


/*********** PROGRAM SECTION ***************/

soundManager.onready(function() {
	// start();
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
	    activateSampel(samples[0]);
	  },
	  volume: 100,
	  multiShot: true
});

}

function randomAll(){
	var currentSelected = selected;
	$("div[data-sample-id]").each(function(key, value){
		randomSampel($(value).attr('data-sample-id'));
	});
	randomSampel(currentSelected);
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
	filename = $(".musicSelect").val();
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

function randomSampel(sampelId){
	var randomPosition = randomSongPostition(1, track_duration);
	samples[sampelId].position = randomPosition;
	activateSampel(samples[sampelId]);
}

function save(id){
	var start = samples[id].position;
	var stop = samples[id].duration;
	var sound = filename;

	start /= 1000;
	stop /= 1000;

	var url = "slice.php?start="+start+"&stop="+stop+"&sound="+sound+"&name=sample";
	window.open(url, '_blank');
}

function randomSongPostition(od, przedzial){
		return Math.floor((Math.random() * przedzial) + od);
}

function postionChange(howMuch){
	samples[selected].position += parseInt(howMuch);
	$(".position").val(samples[selected].position);
	$(".samplePositionSlider").val(samples[selected].position);
}

function loadFirstTrack() {
	filename = $("select.musicSelect option:selected").val();
	start();
}