$(document).ready( function() {
  $(".sampleButton").click( function(){
    var i = $(this).parent().data('sample-id');

    playSampel(samples[i].position, samples[i].duration);
    activateSampel(samples[i]);
  });

  $(".randomButton").click( function(){
    losuj_jeden_sampel($(this).parent().attr('data-sample-id'));
  });

  $(".randomAllButton").click( function(){
    randomAll();
  });

  $(".saveButton").click( function(){
    save($(this).parent().attr('data-sample-id'));
  });

  $("#musicSelect").change( function(){
    load_music();
  });

  $( "body" ).keydown(function( event ) {
    if($("#keyboardEnable").prop('checked')){
      if ( 49 <= event.which <= 56 ) {
       playSampel($(".buttonSpace[data-sample-id='" + (event.which - 49) + "']").find(".samplePosition").val(),
                  $(".buttonSpace[data-sample-id='" + (event.which - 49) + "']").find(".sampleLength").val());
      }
    }
  });

    $(".samplePositionSlider").change(function(){
        samples[selected].position = $(this).val();
        $(".position").val(samples[selected].position);
    });
});

function activateSampel(sample){
  $(".position").val(sample.position);
  $(".samplePositionSlider").val(sample.position);
  $(".duration").val(sample.duration);
    selected = sample.id;
}
