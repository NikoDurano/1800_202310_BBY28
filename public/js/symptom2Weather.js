


const btn = document.querySelector('#nextbtn');        
const radioButtons = document.querySelectorAll('input[name="wheel"]');
btn.addEventListener("click", () => {
    let selectedSize;
    for (const radioButton of radioButtons) {
        if (radioButton.checked) {
            selectedSize = radioButton.value;
            break;
        }
    }
    // show the output:
    alert("weather temp is "+selectedSize +"*C")
});


const btn2 = document.querySelector('#nextbtn');        
const radioButtons2 = document.querySelectorAll('input[name="temp"]');
btn.addEventListener("click", () => {
    let weather;
    for (const radioButton of radioButtons2) {
        if (radioButton.checked) {
            weather = radioButton.value;
            break;
        }
    }
    // show the output:
    alert("Weather outside is "+weather)
});

