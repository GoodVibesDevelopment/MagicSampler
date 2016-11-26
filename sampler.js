/************* CONFIG SECTION *******************/

var soundObj; //sound object
var tempo=150;
var position, duration = 2*(60000 / tempo);
var trackDuration;
var interval;
var filename='guitar.mp3';
var mute_array = [true, true, true, true];
var recorded = true;
var recorded_bytes = [];

var snare = true;
var kick = true;

var counter=0;

var samples = [];


/*********** PROGRAM SECTION ***************/

soundManager.onready(function() {
	start();
});

function start(){
	soundObj = soundManager.createSound({
	  id: 'mySound',
	  url: 'music/'+filename,
	  autoLoad: true,
	  autoPlay: false,
	  onload: function() {
			track_duration = this.durationEstimate;
			//losowanie sampli
			var i=0;
			bit = [];
			for(i=0; i<8; i++){
				pos = my_random(1, track_duration)
				$(".buttonSpace[sample-index='" + i + "']").find(".samplePosition").val(pos);
			}
	  },
	  volume: 100,
	  multiShot: true
});

}

// function stop(){
// 	s.stop();
// 	clearInterval(interval);
// 	clearInterval(drumsInterval);
// 	s.destruct();
// 	counter = 0;
// 	for(var i in [0, 1, 2, 3]){
// 		samples[i].style.color='black';
// 	}
// }

// function randomize(){
// 	var i=0;
// 	bit = [];
// 	for(i=0; i<8; i++){
// 		bit.push(my_random(1, track_duration));
// 	}
//
// 	document.getElementById("sampel1").value = bit[0];
// 	document.getElementById("sampel2").value = bit[1];
// 	document.getElementById("sampel3").value = bit[2];
// 	document.getElementById("sampel4").value = bit[3];
// }

// function loop(){
// 	s.stop();
// 		position = document.getElementById("sampel"+((counter%4)+1)).value;
// 		if(document.getElementById("sampel"+(((counter-1)%4)+1)) != null){
// 			document.getElementById("sampel"+(((counter-1)%4)+1)).style.color = 'black';
// 		}
// 		document.getElementById("sampel"+((counter%4)+1)).style.color = 'red';
// 		counter++;
//
// 		if(mute_array[((counter-1)%4)]){
// 			losujSampel(position, duration);
// 		}
// }

function playSampel(pos, duration){
	if(soundObj.playState === 1){ //if play
		soundObj.stop();
		clearInterval(interval);
	}
	soundObj.setPosition(pos);
	soundObj.play();
	interval = setTimeout(function(){ soundObj.stop(); }, duration);
}

// function load_kick(){
//   name = document.getElementById("kick_select").value;
// 	kick_sound.destruct();
// 	kick_sound = soundManager.createSound({
// 	  id: 'myBeat2',
// 	  url: 'kicks/'+name,
// 	  autoLoad: true,
// 	  autoPlay: false,
// 	  volume: 100
// 	});
// }

// function load_snare(){
// 	name = document.getElementById("snare_select").value;
// 	snare_sound.destruct();
// 	snare_sound = soundManager.createSound({
// 	  id: 'myBeat',
// 	  url: 'snares/'+name,
// 	  autoLoad: true,
// 	  autoPlay: false,
// 	  volume: 100
// 	});
// }

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
			//losowanie sampli
			var i=0;
			bit = [];
			for(i=0; i<8; i++){
				pos = my_random(1, track_duration)
				$(".buttonSpace[sample-index='" + i + "']").find(".samplePosition").val(pos);
			}
	  },
	  volume: 100
	});
}

// function mix(){
// 	var tmp = [
// 						 document.getElementById("sampel1").value,
// 						 document.getElementById("sampel2").value,
// 						 document.getElementById("sampel3").value,
// 						 document.getElementById("sampel4").value
// 					 ];
//
// 		var i = 0;
// 		for(i=0; i<4; i++){
// 			var random = Math.floor((Math.random() * 4) + 1);
// 			document.getElementById("sampel"+random).value = tmp[Math.floor(Math.random() * 4)];
// 		}
// }

function losuj_jeden_sampel(ktory){
	// document.getElementById("sampel"+ktory).value = Math.floor((Math.random() * track_duration) + 1);
	$(".buttonSpace[sample-index='" + ktory + "']").find(".samplePosition").val(pos);
}

// function mute(ktory){
// 	mute_array[ktory] = document.getElementById("mute"+(ktory+1)).checked;
// }
//
// function set_tempo(){
// 	tempo = document.getElementById("tempo").value;
// 	duration = 2*(60000 / tempo);
// }

function save(ktory){
var start = 0;
var stop = 0;
var sound = filename;
var name = filename.substr(0, 3);
	for(i=0; i<8; i++){
		if(typeof ktory !== "undefined" && i != ktory) continue;
		 start = $(".buttonSpace[sample-index='" + i +"']").find(".samplePosition").val();
		 stop = $(".buttonSpace[sample-index='" + i +"']").find(".sampleLength").val();

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
//
// function join(){
// 	var xmlhttp;
// 	// compatible with IE7+, Firefox, Chrome, Opera, Safari
// 	xmlhttp = new XMLHttpRequest();
// 	xmlhttp.onreadystatechange = function(){
// 			if (xmlhttp.readyState == 4 && xmlhttp.status == 200){
// 					callback(xmlhttp.responseText);
// 			}
// 	}
// 	xmlhttp.open("GET", "http://localhost/magicsampler/join.php?name[0]=sampel0.mp3&name[1]=sampel1.mp3&name[2]=sampel2.mp3&name[3]=sampel3.mp3", true);
// 	xmlhttp.send();
// }

function my_random(od, przedzial){
		return Math.floor((Math.random() * przedzial) + od);
}

// var dr_counter = 1;
// function playDrums(){
// 	if(document.getElementById("stopa"+(((dr_counter%16)+1))).checked) {
// 		kick_sound.play();
// 	}
// 	if(dr_counter%4 == 3) {
// 		snare_sound.play();
// 	}
//
// 	dr_counter++;
// }
