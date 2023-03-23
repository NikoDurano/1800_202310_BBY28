


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