// Select color input
// Select size input
var height,width, color;
// When size is submitted by the user, call makeGrid()
$('#sizePicker').submit(function(event){
    event.preventDefault();
    height = $('#inputHeight').val();
    width = $('#inputWeight').val();
    makeGrid(height , width);
    console.log("height "+height + " width "+ width);
});
function makeGrid(x,y) {
        $('tr').remove();
        for(var row=1; row<= x;row++){
          $('#pixelCanvas').append('<tr id=table' + row +'></tr>');
          for(var col=1;col<= y;col++){
            $('#table' + row).append("<td></td>");
          }
        }
     // adding color
      $('td').click(function(){
          color = $('#colorPicker').val();

          if($(this).attr("style")){
             $(this).removeAttr('style');
          }
          else{
            $(this).attr('style' , "background-color : "+ color);
          }
      });
    }
