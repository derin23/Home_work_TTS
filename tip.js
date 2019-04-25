
var billAmount = Number(prompt("How much was your food?"));
var tip_percent = Number(prompt("What percent do you want to tip?"));
	function gratuity(){

		 return billAmount * (tip_percent/100);	
	}

	function totalWithGrat(billAmount){ 

	return gratuity() + billAmount;
		
	}

var total = totalWithGrat(billAmount);
alert("We recomend $" + gratuity().toFixed("2")+" as your tip.");
alert("Your total amount with tips added is $" + total.toFixed("2"));



Rock Paper scissors with functions
var hands = ['rock','paper','scissors'];

function getHand(){

	return hands[parseInt(Math.random()*10)%3];
	
}
