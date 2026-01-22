document.getElementById("event").addEventListener("submit",function(e){
    e.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let fb = document.getElementById("feedback").value.trim();

    let ok = true;

    if(!/^[a-zA-Z\s]+$/ .test(name) || name === "" ){
        document.getElementById("errN").innerText = "Invalid Name";
        ok = false;
    }
    if(email === ""){
        document.getElementById("errE").innerText = "Invalid E-mail";
        ok = false;
    }
    if(fb === "" ){
        document.getElementById("errF").innerText = "Invalid feedback";
        ok = false;
    }
    if(ok){
        document.getElementById("suces").innerText = "Submited!";
    }
});