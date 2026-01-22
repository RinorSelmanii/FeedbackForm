document.getElementById("event").addEventListener("submit",function(e){
    e.preventDefault();

    let name = document.getElementById("name").trim.value();
    let email = document.getElementById("email").trim.value();
    let fb = document.getElementById("feedback").trim.value();

    let ok = true;

    if(!/^[a-zA-Z\s]+$/ .test(name) || name === "" ){
        document.getElementById("errE").innerText = "Invalid Name";
        ok = false;
    }
});