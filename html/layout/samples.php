<div class="samplesPanel">
    <?php
      foreach(range(0, COUNT_OF_SAMPLES-1) as $i){
    ?>
        <div class="buttonSpace" data-sample-id="<?= $i ?>">
          <button class="sampleButton"><?= $i+1 ?></button>
          <button class="saveButton">S</button>
          <button class="randomButton">R</button>
        </div>
    <?php } ?>
</div>
