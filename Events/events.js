document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("ButtonClick").addEventListener("click", displayDate);
});

function displayDate() {
    const date = new Date();
    alert(date);
}