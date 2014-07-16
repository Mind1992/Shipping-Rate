var shipping = {

	rate: function(){
		var baseCost = 10;
		var numberCost = this.number * 10;
		var weightCost = (this.weight * parseFloat(1.50));
		var speedCost = 0;

		if (this.speed === "free") {
			speedCost += 0;
		}
		else if (this.speed === "regular") {
			speedCost += 15;
		}
		else if (this.speed === "express") {
			speedCost += 30;
		}

		var totalCost = baseCost + numberCost + weightCost + speedCost;
		return totalCost;
	}
};

$(document).ready(function() {


	$("form#shipping-details").submit(function(event) {
		event.preventDefault();
		shipping.number = parseInt($("#number-of-packages").val());
		shipping.weight = parseInt($("#weight").val());
		shipping.speed = $("#speed").val(); //string
		// console.log(shipping.rate());

	});
});


//totalCost.toPrecision(2);
