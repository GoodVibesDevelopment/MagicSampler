<h1>Magic Sampler</h2>
    <button class="randomAllButton">Random All Samples</button>
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
    <input class="samplePositionSlider" type="range" />