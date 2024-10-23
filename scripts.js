document.addEventListener('DOMContentLoaded', function () {
 const themeToggleButton = document.getElementById('theme-toggle');
 const body = document.body;

 themeToggleButton.addEventListener('click', function () {
  // Toggle the 'dark-mode' class on the body
  body.classList.toggle('dark-mode');

  // Optionally change button text
  if (body.classList.contains('dark-mode')) {
   themeToggleButton.textContent = 'Switch to Light Mode';
  } else {
   themeToggleButton.textContent = 'Switch to Dark Mode';
  }
 });
});
