document.querySelector("#date").textContent = document.lastModified;
var options = {year: "numeric"};
document.querySelector("#year").textContent = new Date().toLocaleDateString("en-US", options);