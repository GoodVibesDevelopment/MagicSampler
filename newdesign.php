<?php require "config.php"; ?>

<!doctype html>

<html>
<head>
<meta charset="UTF-8">
<title>Magic Sampler</title>
<script src="soundmanager/script/soundmanager2-nodebug.js"></script>
<script src="sampler.js"></script>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.2/jquery.min.js"></script>

<link href='https://fonts.googleapis.com/css?family=Slabo+27px' rel='stylesheet' type='text/css'>
<link rel="stylesheet" type="text/css" href="newdesign.css">

</head>
<body id="bodyId">
  <section class="header">
    <h1>Magic Sampler</h2>
    <h2>Good Vibes Development ver. 1.0</h2>
  </section>
  <section id="settingsPanel">
    <input type="checkbox" id="keyboardEnable" />Keyboard enabled
  </section>
  <div id="samplesPanel">
      <?php
        foreach(range(0, COUNT_OF_SAMPLES-1) as $i):
      ?>
          <div class="buttonSpace" sample-index="<?= $i ?>">
            <div class="sampleButton"><?= $i+1 ?></div>
            <a href="#" class="saveButton">SAVE</a> <br>
            <a href="#" class="randomButton">Random</a>
            <div>Pos: <input class="samplePosition" size="5" /></div>
            <div>Len: <input class="sampleLength" size="5" value="2000" /></div>
          </div>
      <?php endforeach; ?>
  </div>

  <div class="bottomPanel">
    <a href="#">Random All Samples</a>
    <select id="musicSelect">
    <?php
      $dir    = './music/';
      $files1 = scandir($dir);
      foreach($files1 as $v){
        if(substr($v, -3, 3)=="mp3" || substr($v, -3, 3)=="MP3"){
            echo '<option value="'.$v.'">'.$v.'</option>';
        }
      }
    ?>
    </select>
  </div>
<script src="events.js"></script>
</body>

</html>
