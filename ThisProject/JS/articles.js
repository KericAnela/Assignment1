// Interactive gallery beginning
var modal = document.getElementById("newModal");
var modalImg = document.getElementById("modalImg");

var img1 = document.getElementById("img1");
var img2 = document.getElementById("img2");

img1.onclick = function() {
    modal.style.display = "block";
    modalImg.src = this.src;
}

img2.onclick = function() {
    modal.style.display = "block";
    modalImg.src = this.src;
}

var span = document.getElementsByClassName("close")[0];
span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
// Interactive gallery end

// Toggle content begin
function readMore(){
    document.getElementById('link').parentElement.removeChild('link');
    document.getElementById('more').style.display = "block";
}
// Toggle content end