//your JS code here. If required.
const username = document.getElementById("username");
const password = document.getElementById("password");

if(sessionStorage.getItem("token")){
    // window.location.href = "./secondpage.html"
}
else{
    document.getElementById("btn").addEventListener("click", function(){
        console.log(username.value)
        console.log(password.value);
        // window.location.href = "./secondpage.html"
        sessionStorage.setItem("token", username.value);
    })
}


