<div class="samplesPanel">
    <?php
      foreach(range(0, COUNT_OF_SAMPLES-1) as $i){
    ?>
        <div class="buttonSpace" sample-index="<?= $i ?>">
          <button class="sampleButton"><?= $i+1 ?></button>
          <button class="saveButton">SAVE</button>
          <button class="randomButton">R</button>
          <div>Pos: <input class="samplePosition" /></div>
          <div>Len: <input class="sampleLength" value="<?= DEFAULT_SAMPLE_DURATION ?>" /></div>
        </div>
    <?php } ?>
</div>
