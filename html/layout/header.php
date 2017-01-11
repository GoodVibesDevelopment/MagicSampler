<h1>Magic Sampler</h1>
<section>
    <button class="randomAllButton">Random All Samples</button>
    <select class="musicSelect">
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
</section>
<section class="headerSettings">
    <span class="description"></span>
    <input class="position" />
    <input class="duration" />
</section>
<input class="samplePositionSlider" type="range" />
    <br />
<input class="samplePositionSliderZoom" type="range" min="-1000" max="1000" value="0" step="1" />
    <br />
<input class="sampleDurationSlider" type="range" min="1" max="10000" />