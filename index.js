document.getElementById("counter").addEventListener("click", function(){
    let count = 0;
    const result = document.getElementById("result");
    
    const counterDiv = document.createElement("div");
    counterDiv.className = "counter-container my-3 d-flex";
    
    const increaseButton = document.createElement("button");
    increaseButton.className = "btn btn-success mx-2";
    increaseButton.textContent = "+";
    
    const countDisplay = document.createElement("h2");
    countDisplay.textContent = count;
    
    const decreaseButton = document.createElement("button");
    decreaseButton.className = "btn btn-danger mx-2";
    decreaseButton.textContent = "-";
    
    counterDiv.appendChild(increaseButton);
    counterDiv.appendChild(countDisplay);
    counterDiv.appendChild(decreaseButton);
    
    result.appendChild(counterDiv);
    
    increaseButton.addEventListener("click", function() {
        count++;
        countDisplay.textContent = count;
    });
    
    decreaseButton.addEventListener("click", function() {
        count--;
        countDisplay.textContent = count;
    });
});