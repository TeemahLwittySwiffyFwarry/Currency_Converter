let button = document.getElementById("btn")

var resultElement = document.getElementById("result");

button.onclick= function() {  
    var amount = parseFloat(document.getElementById("amount").value);

    
    var currency = document.getElementById("currency").value;

    var convertedAmount;

    

    if (currency === "usd") {

        // Convert USD to NGN (Nigerian Naira)

        convertedAmount = amount * 750; // Conversion rate: 1 USD = 410 NGN
        resultElement.textContent = amount + "USD = " + convertedAmount.toFixed(2) + " NGN"
;    } else if (currency === "ngn") {

        convertedAmount = amount / 750;

        resultElement.textContent = amount + " NGN  = " + convertedAmount.toFixed(2) + " USD";
    }

    resultElement.textContent= ""

    resultElement.appendChild(document.createTextNode(resultElement));
}

