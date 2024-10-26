document.addEventListener('DOMContentLoaded', function() {
    const locationNav = document.querySelector('.nav-item:has(a[href="#"])');
    const locationLink = locationNav.querySelector('.nav-link');
    let isOpen = false;

    // click
    locationLink.addEventListener('click', function(e) {
        e.preventDefault();
        if (!isOpen) {
            // close any other else
            document.querySelectorAll('.nav-item.active').forEach(item => {
                if (item !== locationNav) {
                    item.classList.remove('active');
                }
            });
        }
        locationNav.classList.toggle('active');
        isOpen = !isOpen;
    });

    // close dropdown menu
    document.addEventListener('click', function(e) {
        if (!locationNav.contains(e.target)) {
            locationNav.classList.remove('active');
            isOpen = false;
        }
    });


// "Find a Location" & Footer "Locations"
const locationLinks = [
    document.querySelector('.btn-primary[href=""]'),  
    document.querySelector('.footer-nav a[href=""]')  
].filter(Boolean);

locationLinks.forEach(link => {
    if (link) {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // roll to the correct position
            locationNav.scrollIntoView({ behavior: 'smooth' });
            
            // open the dropdown menu
            setTimeout(() => {
                // if not, then
                if (!isOpen) {
                    locationLink.click();
                }
            }, 500);
        });
    }
});
});