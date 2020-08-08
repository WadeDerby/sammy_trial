let inputNode = document.querySelector("#inputValue"), // we have to fetch the nodes first
    unitSelector = document.querySelector("#unit"),
    convertBtn = document.querySelector(".convert"),
    resultNode = document.querySelector(".result"),
    inputValue = 0, //initialize the values to zero
    unitValue = 0,  
    result;

convertBtn.addEventListener("click", () => {
    //on click is when you want to get the current values of the input and the unit selected
    inputValue = Number(inputNode.value);
    unitValue = Number(unitSelector.value);
    if (unitValue === 1) {
        result = inputValue / 1000;
    } else {
        result = inputValue * 1000;
    }
    resultNode.innerHTML = result;
});
