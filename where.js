document.addEventListener('DOMContentLoaded', function(){

	var form = document.getElementById('myform');
	form.addEventListener('submit', function(e){
		e.preventDefault();
		splitData(setData());
	});

	function movingLetter(){
		
		// container is the DOM element;
		// userText is the textbox
		
		var container = $("#montext")
			userText = $('#userText'); 
		
		// Shuffle the contents of container
		container.shuffleLetters();

		// Bind events
		userText.click(function () {
			
		  userText.val("");
		  
		}).bind('keypress',function(e){
			
			// if(e.keyCode == 13){
				
			// 	// The return key was pressed
				
			// 	container.shuffleLetters({
			// 		"text": userText.val()
			// 	});
				
			// 	userText.val("");
			// }

		}).hide();

		// Leave a 4 second pause

		// setTimeout(function(){
			
		// 	// Shuffle the container with custom text
		// 	container.shuffleLetters({
		// 		"text": in_mm
		// 	});
			
		// 	userText.val("type anything and hit return..").fadeIn();
			
		// },4000);
		
	};




	function getData(){
		var ladate=new Date();
		var jour= ladate.getDate().toString();
		if (jour.length === 1 ) {
			jour = '0' + jour;
		} 
		var mois= ladate.getMonth().toString();
		var data=(mois+1)+jour;
		filterData(data);
		dataSolid();
		return data;
	}


	function dataSolid(){
		var data_string = new Date().toDateString();
		document.getElementById('solid').innerHTML = data_string;
	}



	function filterData(data) { 

		console.log("data",data)
		if (data >= 0323 && data <= 0327) 
		{ 
			in_mm = "full.";
		}
		else if ((data >= 0316 && data <= 0320) || ((data >= 0301 && data <= 0305))) 
		{
			in_mm = "zero.";
		}
		else if (data == 0406 || data == 0501 || data == 0508 || data == 0514 || data == 0525) 
		{
			in_mm = "no.";
		}
		else if (data == 0626) 
		{
			in_mm = "exam.";
		}
		else {
			in_mm = "half.";
		} 
		console.log(in_mm);

		document.getElementById('montext').innerHTML = in_mm;
		movingLetter();
	}

	function setData(){
		var newData = document.getElementById("search").value; 
		console.log(newData);
		return newData;
		
	}

	function splitData (newData) {
		var foo = newData.split('-');
		console.log(foo);
		var parsedData = foo[1] + foo[2];
		console.log(parsedData);
		filterData(parsedData);
	}

	getData();

});

