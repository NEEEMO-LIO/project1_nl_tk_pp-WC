document.getElementById('locationsMenuLink').addEventListener('click', function(event) {
    event.preventDefault();  // Prevent the default link behavior
    var locationsSection = document.getElementById('locationsSection');

    // Toggle visibility and class to control styles
    if (locationsSection.style.display === 'none' || locationsSection.style.display === '') {
        locationsSection.style.display = 'block';
        locationsSection.classList.add('show');  
    } else {
        locationsSection.style.display = 'none';
        locationsSection.classList.remove('show'); 
    }
});
