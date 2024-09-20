var btn = document.getElementById("btn");
var btnText = document.getElementById("btnText");

btn.onclick = function() {
  btnText.innerHTML = "Thanks";
  btn.classList.add("active");
}

document.addEventListener('DOMContentLoaded', function() {
  const submitButton = document.getElementById('btn'); // Assuming the button has an id of 'btn'

  submitButton.addEventListener('click', function() {
      // Redirect to the home page after 3 seconds
      setTimeout(function() {
          window.location.href = '/home'; // Redirect to the home page
      }, 2000); // 3000 milliseconds = 3 seconds
  });
});  
