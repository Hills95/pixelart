// Select color input
// Select size input
var height, width, color;
// When size is submitted by the user, call makeGrid()

$('#sizePicker').submit(function(event) {
  event.preventDefault();
  height = $('#inputHeight').val();
  width = $('#inputWeight').val();
  makeGrid(height, width);
  //console.log(height+" "+width);
});

function makeGrid(n, m) {
	$('tr').remove();
// Your code goes here!
	for(var i=1; i<=n; i++){
		$('#pixelCanvas').append('<tr id=table' +i+ '></tr>');
		for(var j=1; j<=m; j++){
			$('#table'+i).append('<td></td>');
		}
	}
//add color
	$('td').click(function addColor(){
		color = $('#colorPicker').val();

		if($(this).attr('style')){
			$(this).removeAttr('style');
		}else{
			$(this).attr('style', 'background-color:'+color);
		}
	})

}
