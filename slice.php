<?php
//skraca i tworzy nowy sampel
  $path = getcwd();
  if($_GET){
   system("ffmpeg -ss ".$_GET['start']." -i ".$path.'/music/'.$_GET['sound']." -t ".$_GET['stop']." ".$path.'/sample/'.$_GET['name'].'.wav');
   echo "OK";
  }
  else {
    echo "Brak parametrow";
  }
?>
