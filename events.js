/* key shortcuts
 * n=78  : change position -10
 * m=77  : change position -1
 * ,=188 : change position +1
 * .=190 : change position +10
 */

var keys = [78, 77, 188, 190];

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
    switch(event.which) {
      case keys[0]:
        postionChange(-10);
        break;
      case keys[1]:
        postionChange(-1);
        break;
      case keys[2]:
        postionChange(1);
        break;
      case keys[3]:
        postionChange(10);
        break;
      default:
        ;
    }

    if($("#keyboardEnable").prop('checked')){
      if ( 49 <= event.which <= 56 ) {
       playSampel($(".buttonSpace[data-sample-id='" + (event.which - 49) + "']").find(".samplePosition").val(),
                  $(".buttonSpace[data-sample-id='" + (event.which - 49) + "']").find(".sampleLength").val());
      }
    }
  });

    $(".samplePositionSlider").on("input change", function(){
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
