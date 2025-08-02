
assignEvents();

function assignEvents() {
    const submitButton = document.querySelector("#submitButton");

    if(submitButton)
        submitButton.addEventListener("click", () => {
            const selectedValue = document.querySelector("#selectedValue").value,
                output = document.querySelector("#resultParagraph > span");

            obtainWaterRate(selectedValue, output);
        })
    ;
}

function obtainWaterRate(value, outputHTML) {
    //process
    let finalValue = waterRate(value);

    if(typeof finalValue == "number") 
        finalValue = `R$` + finalValue.toFixed(2);

    // output
    outputHTML.innerHTML = finalValue;
}

function waterRate(waterQuantity) {
    let value;

    switch(true) {
        case(waterQuantity >= 0 && waterQuantity <= 5):
            value = 94.19;
            break;

        case(waterQuantity >= 6 && waterQuantity <= 10):
            value = 2.91*waterQuantity + 79.64;
            break;

        case(waterQuantity >= 11 && waterQuantity <= 15):
            value = 16.23*waterQuantity - 53.56;
            break;

        case(waterQuantity >= 16 && waterQuantity <= 20):
            value = 16.31*waterQuantity - 54.76;
            break;

        case(waterQuantity >= 21 && waterQuantity <= 30):
            value = 16.45*waterQuantity - 57.56;
            break;

        case(waterQuantity > 30):
            value = 27.84*waterQuantity - 399.26;
            break;

        default:
            value = "Quantia fora dos padrões utilizada."
    }

    return value;
}
