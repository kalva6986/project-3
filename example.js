const simsstudent = document.getElementById("simsstudent");
const idcard = document.getElementById("idcard");
const age18 = document.getElementById("age18");
const checkButton = document.getElementById("check");
const passengerstatus = document.getElementById("status");

checkButton.addEventListener("click",function(){
    let issimsstudent=simsstudent.checked;
    let hasidcard=idcard.checked;
    let isageabove18=age18.checked;
    console.log(issimsstudent,hasidcard,isageabove18);
    if(issimsstudent){
        console.log("seat is available for you😊");
        if(hasidcard){
            console.log("Has id card");
            if(isageabove18){
                console.log("Aged above 18");
                alert("please come inside");
            }else{
                console.log("but your age is below 18. ");
                passengerstatus.textContent="But your age is below 18";
            }
        }else{
            console.log("but you don't have an id card");
            passengerstatus.textContent="But you don't have an id card"
        }
    }else{
        console.log("you are not a sims student.");
        passengerstatus.textContent="you are not a sims student."
    }
})