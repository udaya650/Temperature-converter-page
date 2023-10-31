let typeInput1=document.getElementById("typeInput1");
let typeInput2=document.getElementById("typeInput2");
let result=document.getElementById("result");
let converterButton=document.getElementById("converterButton");

function resultShowing(){
    let firstInput=typeInput1.value;
    let secondInput=typeInput2.value;
    console.log(secondInput);
    if(secondInput==="fahrenheit"){
        let resultOfConverter=((firstInput*(1.8))+32);
        result.value=resultOfConverter+"F";
    }
    else if(secondInput==="celsius"){
        let resultOfConverter=((firstInput - 32)*(5/9));
        result.value=resultOfConverter+"C";
    }
    else if(secondInput==="kelvin"){
        let resultOfConverter=(((firstInput-32)*(5/9))+273.15);
        result.value=resultOfConverter+"K";
    }
}





