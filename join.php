<?php
$i=0;
for($i=0; $i<3; $i++){
  if($i == 2){
    $output = "joined.mp3";
  }
  else {
    $output = $_GET['name'][$i+1];
  }
  if($i == 0){
    $command = "ffmpeg -i \"concat:sample/".$_GET['name'][$i]."|sample/".$_GET['name'][$i+1]."\" -acodec copy ".$output;
  }
  else {
    $command = "ffmpeg -i \"concat:".$_GET['name'][$i]."|sample/".$_GET['name'][$i+1]."\" -acodec copy ".$output;
  }
  echo $command;
  system($command);
}
?>
