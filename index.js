$( document ).ready(function() 
	{
		function calculate () {
	var weight = $('#yourWeight').val();
	var selected = $('#planet option:selected').val();
	var result = weight * selected;
	var planet = $('planet option:selected').text();
	var answer = "If were stuck on " + planet + ", you would weigh " + result.toFixed(2) + " pounders, baby!";



	return false;

 // $("#output").text("If were stuck on " + planet + ", you would weigh " + result.toFixed(2) + " pounders, baby!");

} 

var button = document.getElementById('button');
button.onclick = calculate;


}
                                                                                                   