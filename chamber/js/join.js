
// -------------------  JOIN PAGE HIDDEN DATE & TIME -------------------------------
const dateTime = new Date();
localStorage.setItem("formSubmited", dateTime);

document.querySelector("#datetime").value = dateTime;
