function login_change(element) {
    element.innerText = "Logout";
}

function decline(element) {
    element.remove();
}

function accept(element){
    element.remove();
    document.querySelector("#notifications").innerHTML++
}
