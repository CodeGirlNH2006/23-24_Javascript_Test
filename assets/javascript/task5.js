/* Put code for the task below */
// function to the check the form if empty
function checkForm(){
    const fullName = document.getElementById("fullName");
    const address = document.getElementById("address");
    const email = document.getElementById("email");
    const phone = document.getElementById("phone");
    // if statements to check if the input is empty
    // if it is empty, turn the field red
    // otherwise, it changes the field to white
    if (fullName.value === ""){
        fullName.style.backgroundColor = "red";
    }
    else{
        fullName.style.backgroundColor = "white";
    }
    if (address.value === ""){
        address.style.backgroundColor = "red";
    }
    else{
        address.style.backgroundColor = "white";
    }
    if (email.value === ""){
        email.style.backgroundColor = "red";
    }
    else{
        email.style.backgroundColor = "white";
    }
    if (phone.value === ""){
        phone.style.backgroundColor = "red";
    }
    else{
        phone.style.backgroundColor = "white";
    }
}