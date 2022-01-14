var formulaInput = document.getElementById("formula-input");
var calcHistDiv = document.getElementById("calc-history");

formulaInput.addEventListener("keyup", function(e){
    if (e.code === "Enter")
        calculate();
})

function calculate(){
    var fm = formulaInput.value;
    var formulaRegex = /^\d+(.\d+)?[+\-*/]{1}\d+(.\d+)?$/;
    var formulaValid = formulaRegex.test(fm);
    
    var resultText = "No";
    if(formulaValid){
        var answer;
        eval('answer=' + fm);
        resultText = fm + " = ";
        resultText += (answer%1>0 ? answer.toFixed(2) : answer.toString());
    }

    var resultDiv = document.createElement("DIV");
    resultDiv.appendChild(document.createTextNode(resultText));
    if(!formulaValid)
        resultDiv.classList.add("invalid");
    calcHistDiv.insertBefore(resultDiv, calcHistDiv.firstChild);

    formulaInput.value = "";
}