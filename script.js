const toggleModeButton = document.getElementById('toggle-mode');
const body = document.body;

toggleModeButton.addEventListener('click', function(event) {
    event.preventDefault(); 
    body.classList.toggle('dark-mode');
    if (body.classList.contains('dark-mode')) {
        toggleModeButton.textContent = 'Dark Mode';
    } else {
        toggleModeButton.textContent = 'Light Mode';
    }
});

