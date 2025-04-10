document.addEventListener('DOMContentLoaded', function() {
  const submitButton = document.getElementById('btn'); 
  const form = document.getElementById('contactForm');  // Get the form element

  // When form is submitted, validate before proceeding
  form.onsubmit = function(event) {
      // Check if the form is valid (all required fields are filled)
      if (!form.checkValidity()) {
          event.preventDefault();  // Prevent form submission if not valid
          alert('Please fill in all the required fields.');
      } else {
          submitButton.classList.add('active');
          document.getElementById('btnText').innerHTML = 'Thanks';
          
          // Simulate submission delay
          setTimeout(function() {
              window.location.href = '/home'; // Redirect to home after submission
          }, 2000);
      }
  };
});
