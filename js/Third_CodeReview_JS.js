//start of function
function calculateInsurancePerCountry(){
	var name = document.getElementById("name").value;
	var age = document.getElementById("age").value;
	var hp = document.getElementById("hp").value;
//checks if all inputs are filled
	if(name == "" || age == "" || hp ==""){
		alert("More information needed");
	}
	//checks if car is older than zero
	else if(age == 0){
		alert("Your car has to be older than 0")
	}
	//if everything is filled
	else{
		var country = document.getElementById("country").value;
		var output = document.createElement("h1");
		var select = document.querySelector("select");
		var choice = select.value;
		//checks the choice you made for the country and chooses right formula
		if(choice === "austria"){
			var price = hp*100/age+50;	
		}
		else if(choice === "hungary"){
			var price = hp*120/age+100;	
		}
		else{
			var sum = Number(age)+3;
			var price = hp*150/sum+50;
		}
		//creates the sentence you see after calculating the price
		var sentence = document.createTextNode (name + ", your insurance price is: €" + price.toFixed(2));
		var replace = document.getElementById("insuranceoutput");
		//replaces the sentence in case you calculate multiple times
		while(replace.hasChildNodes()){
			replace.removeChild(replace.firstChild);
		}
		//adds the sentence to the correct div
		output.appendChild(sentence);
		document.getElementById("insuranceoutput").appendChild(output);
	}
}
//adds the onclick event for the button to call the funtion
var n = document.getElementById("btn");
n.addEventListener("click", calculateInsurancePerCountry, false);






