const modal = document.getElementById("newsLetter");
const span = document.getElementsByClassName("close")[0];

const subscribe = () => {

    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}