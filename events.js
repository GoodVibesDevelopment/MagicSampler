$(document).ready( function() {
  $(".sampleButton").click( function(){
    playSampel($(this).parent().find(".samplePosition").val(), $(this).parent().find(".sampleLength").val());
  });

  $(".randomButton").click( function(){
    losuj_jeden_sampel($(this).parent().attr('sample-index'));
  });

  $(".randomAllButton").click( function(){
    randomAll();
  });

  $(".saveButton").click( function(){
    save($(this).parent().attr('sample-index'));
  });

  $("#musicSelect").change( function(){
    load_music();
  });

  $( "body" ).keydown(function( event ) {
    if($("#keyboardEnable").prop('checked')){
      if ( 49 <= event.which <= 56 ) {
       playSampel($(".buttonSpace[sample-index='" + (event.which - 49) + "']").find(".samplePosition").val(),
                  $(".buttonSpace[sample-index='" + (event.which - 49) + "']").find(".sampleLength").val());
      }
    }
  });
});
