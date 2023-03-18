
const btn3B = document.querySelector('#nextbtn');
btn3B.addEventListener('click', (event) => {
    let checkboxes = document.querySelectorAll('input[name="Physical"]:checked');
    let values = [];
    checkboxes.forEach((checkbox) => {
        values.push(checkbox.value);

        //EDIT conditional TO WHATEVER LOW RISK CONDITION
        if(values.includes("gums")){
            lowRisk();
            
        //EDIT conditional TO WHATEVER MID RISK CONDITION
        }else if(values.includes("heartrate")){
            midRisk();

        //THIS SHOULD BE FINE
        }else{
            highRisk();
        }

    });
    alert(values);
});


function lowRisk() {

    const close1 = document.getElementById("close1");
    const modelCon1 = document.getElementById("modelCon1");

    close1.addEventListener("click", () => {
        modelCon1.classList.remove('show');
    })
        modelCon1.classList.add('show');
}

function midRisk() {

    const close1 = document.getElementById("close2");
    const modelCon1 = document.getElementById("modelCon2");

    close1.addEventListener("click", () => {
        modelCon1.classList.remove('show');

    })
        modelCon1.classList.add('show');
}

function highRisk() {

    const close1 = document.getElementById("close3");
    const modelCon1 = document.getElementById("modelCon3");

    close1.addEventListener("click", () => {
        modelCon1.classList.remove('show');
    })
        modelCon1.classList.add('show');
}