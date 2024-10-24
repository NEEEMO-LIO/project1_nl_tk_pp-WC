document.getElementById('locationsMenuLink').addEventListener('click', function(event) {
    event.preventDefault();  // Prevent default behavior
    var locationsSection = document.getElementById('locationsSection');
    console.log('Locations menu clicked');  // Check if click is registered
    
    // Toggle visibility
    if (locationsSection.style.display === 'none' || locationsSection.style.display === '') {
        locationsSection.style.display = 'block';
    } else {
        locationsSection.style.display = 'none';
    }
});
