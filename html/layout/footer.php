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
