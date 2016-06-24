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
